const User = require("../models/User");
const Book = require("../models/Book");
const Details = require("../models/Details");
const Membership = require("../models/Membership");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();


//sign up
exports.signup = async (req, res) => {
    try {
      const {  name,email, password ,type } = req.body;
  
      if (!name || !email || !password || !type) {
        return res.status(400).json({
          success: false,
          message: "Missing requirements.",
        });
      }
  
      //email already in use
      const exUser = await User.findOne({ email: email });
      if (exUser) {
        return res.status(500).json({
          success: false,
          message: "Email already registered.",
        });
      }
  

       const hashedPassword = await bcrypt.hash(password, 10);

       const details = await Details.create(
        {
          contact : 'NA',
          address : 'NA'
        }
       );

        //new user created in DB
        const user = await User.create({
            email : email,
            password : hashedPassword,
            type : type,
            name : name,
            details : details._id
        });

        return res.status(200).json({
          success: true,
          message: "User created successfully.",
        });
      }catch (err) {
      return res.status(500).json({
        success: false,
        message: "Sign-up failed.",
        error: err.message,
      });
    }
  };  
  
//login
exports.login = async (req, res) => {
    try {
      const { email, password ,type } = req.body;
  
      //validation
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Missing requirements.",
        });
      }
  
      //email not in use
      const exUser = await User.findOne({ email: email });
      if (!exUser) {
        return res.status(500).json({
          success: false,
          message: "Email not registered. Please sign up first.",
        });
      }
  
      //password valid
      if (await bcrypt.compare(password, exUser.password)) {
        const user = await User.findOne({ email: email });

        if(user.type !== type){
          return res.status(400).json({
            success: false,
            message: `Only for ${user.type} type`,
          });
        }

        user.password = null;
  
        //jwt token
        const data = {
          _id: user._id,
          email: user.email,
          type: user.type,
        };
  
        const token = jwt.sign(data, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
  
        const options = {
          expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
  
        return res.cookie("token", token, options).status(200).json({
          success: true,
          user,
          token,
          message: "User logged in",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Password is incorrect.",
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Login failed.",
        error: err.message,
      });
    }
};

//---------------------------------

//add details
exports.addUserDetails = async (req, res) => {
  try {
    const { email , contact , address } = req.body;

    //validation
    if (!email || !contact || !address) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const user = await User.findOne({email});

    await Details.findOneAndUpdate({_id : user.details},{
      contact : contact,
      address : address
    })

    return res.status(200).json({
        success: true,
        message: "Details added",
    });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//update details
exports.updateUserDetails = async (req, res) => {
  try {
    const { email , contact="" , address="" } = req.body;

    //validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const user = await User.findOne({email});

    const details = await Details.findOne({_id : user.details});

    if(contact){details.contact = contact;}

    if(address){details.address = address;}

    await details.save();

    return res.status(200).json({
        success: true,
        message: "Details updated",
    });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//add book
exports.addBook = async (req, res) => {
  try {
    const { name , author, category , price , serialNo , quantity  } = req.body;

    //validation
    if (!name || !author  || !category || !price || !serialNo || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    await Book.create({
      name,author,category,price,serialNo,quantity
    })

    
    return res.status(200).json({
        success: true,
        message: "Book created successfully",
      });
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//update book
exports.updateBook = async (req, res) => {
  try {
    const {
      id,
      name = "",
      author = "",
      category = "",
      price = "",
      serialNo = "",
      quantity = ""
    } = req.body;

    if(!id){
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    //find profile
    const book = await Book.findOne({
      _id: id,
    });

    if (name !== "") {
      book.name = name;
    }
    if (author !== "") {
      book.author = author;
    }
    if (category !== "") {
      book.category = category;
    }
    if (price !== "") {
      book.price = price;
    }
    if (serialNo !== "") {
      book.serialNo = serialNo;
    }
    if (quantity !== "") {
      book.quantity = quantity;
    }
    
    await book.save();

    return res.status(200).json({
      success: true,
      message: "Book updated successfully.",
    });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//add membership
exports.addMembership = async (req, res) => {
  try {
    const { email , months } = req.body;

    //validation
    if (!email || !months) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const user = await User.findOne({email : email});

    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + months);

    await Membership.create({
      userId : user._id,
      endDate : endDate
    })

    
      return res.status(200).json({
        success: true,
        message: "Membership created",
      });
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//add membership
exports.updateMembership = async (req, res) => {
  try {
    const { email , remove, months } = req.body;

   
    //validation
    /*
    if (!email || !months || !remove) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    } */

    const user = await User.findOne({email : email});

    const exMembership = await Membership.findOne({userId : user._id});

    if(!exMembership){
      return res.status(400).json({
        success: false,
        message: "No such membership present",
      });
    }

    if(remove === true){
      await Membership.findOneAndDelete({_id : exMembership._id});  
      return res.status(200).json({
        success: true,
        message: "Membership removed",
      });
    }else{

      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + months);

      await Membership.findOneAndUpdate({
        userId : user._id,
      },{
        endDate : endDate
      });

      return res.status(200).json({
        success: true,
        message: "Membership updated",
      });
    }

  
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//book details
exports.booksForHome = async (req, res) => {
  try {
      const data = await Book.find({}).limit(5);

      return res.status(200).json({
        success: true,
        data: data,
        message: "success",
      });
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};