const User = require("../models/User");
const Book = require("../models/Book");
const Details = require("../models/Details");
const Membership = require("../models/Membership");
const Issue = require("../models/Issue");

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

    const exMembership = await Membership.findOne({userId : user._id});

    if(exMembership){
      return res.status(400).json({
        success: false,
        message: "membership already present",
      });
    }

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
      const data = await Book.find({}).limit(5).sort({_id: -1});

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

//all books name
exports.allBook = async (req, res) => {
  try {
    
      const data  = await Book.find({quantity  : {$ne : 0}}).select("_id name author").exec();

      return res.status(200).json({
        success: true,
        message: "data fetched",
        data
      });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//book available
exports.bookbyid =async (req, res) => {
  try {
    const { id } = req.body;

    //validation
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const data  = await Book.findOne({_id : id});

      return res.status(200).json({
        success: true,
        message: "datafetched",
        data 
      });
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};
exports.bookbyname =async (req, res) => {
  try {
    const { name } = req.body;

    //validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const data  = await Book.findOne({name : name});

      return res.status(200).json({
        success: true,
        message: "data fetched",
        data 
      });


    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

exports.issueBook = async (req, res) => {
  try {
    const { id , issueDate, returnDate ,remarks,userId } = req.body;

    //validation
    
    if (!id || !issueDate || !returnDate || !userId || !remarks) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const mem = await Membership.findOne({userId : userId});

    if(!mem){
      return res.status(400).json({
        success: false,
        message: "First take a membership",
      });
    }

    if(Date.now() > mem.endDate){
      return res.status(400).json({
        success: false,
        message: "Membership expired",
      });
    }

  
    const book  = await Book.findOne({_id : id});

    if(book.quantity < 0 ){
      return res.status(400).json({
        success: false,
        message: "Book unavailable",
      });
    }

    await Issue.create({
      userId : userId,
      bookId : book._id,
      issueDate : issueDate,
      returnDate : returnDate,
      remarks
    })

    await Book.findOneAndUpdate({_id : book._id},{
      quantity : book.quantity-1
    })

    return res.status(200).json({
        success: true,
        message: "book isssued", 
      });
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};


//get user's issued books
exports.userIssueBook = async (req, res) => {
  try {
    const { userId } = req.body;

    //validation
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const data = await Issue.find({userId : userId}).populate('bookId').exec();

    return res.status(200).json({
      success: true,
      message: "data fetched",
      data : data
    });
    
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//return book
exports.returnBook = async (req, res) => {
  try {
    const { id  } = req.body;

    //validation
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const issue = await Issue.findOne({_id : id});

    //validation
    if(!issue){
      return res.status(400).json({
        success: false,
        message: "Invalid book",
      });
    }


    /*
    if(true){

      await Issue.findOneAndDelete({id});

      return res.status(200).json({
        success: true,
        message: "Book returned",
      });
    }else{
      return res.status(500).json({
        success: false,
        message: "pay fine first",
      });
    }
    */

  
    function getDateDifference(date1, date2) {
      // Convert strings to Date objects
      let d1 = new Date(date1);
      let d2 = new Date(date2);
  
      // Calculate the difference in milliseconds
      let diffInTime = d2 - d1; // Remove Math.abs() to keep sign
  
      // Convert milliseconds to days
      let diffInDays = diffInTime / (1000 * 60 * 60 * 24);
  
      return diffInDays;
  }
  
  const today = new Date(Date.now()).toISOString().split('T')[0];
    

  const diff  = (getDateDifference(today,issue.returnDate));
  

  if(diff < 0){
    return res.status(500).json({
      success: false,
      message: "Pay fine first.",
    });
  }
    
  else{

    await Issue.findOneAndDelete({_id : id});

    const book = await Book.findOne({_id : issue.bookId});
    await Book.findOneAndUpdate({_id : issue.bookId},{
      quantity : book.quantity +1 
    });

    return res.status(200).json({
      success : true,
      message : "Book submitted successfully"
    })
  }
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};


exports.calcFine =  async (req, res) => {
  try {
    const { id  } = req.body;

    //validation
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const issue = await Issue.findOne({_id : id});

    //validation
    if(!issue){
      return res.status(400).json({
        success: false,
        message: "Invalid book",
      });
    }

    function getDateDifference(date1, date2) {
      // Convert strings to Date objects
      let d1 = new Date(date1);
      let d2 = new Date(date2);
  
      // Calculate the difference in milliseconds
      let diffInTime = d2 - d1; // Remove Math.abs() to keep sign
  
      // Convert milliseconds to days
      let diffInDays = diffInTime / (1000 * 60 * 60 * 24);
  
      return diffInDays;
    }
  
  const today = new Date(Date.now()).toISOString().split('T')[0];
    

  const diff  = (getDateDifference(today,issue.returnDate));


    if(diff >= 0){
      return res.status(200).json({
        success : true,
        message : "fine calculated",
        data : 0
      })
  
    }

    //calc
    const total = -1 *(diff);

    await Issue.findOneAndUpdate({_id : id},{
      fine : total
    })

    return res.status(200).json({
      success : true,
      message : "fine calculated",
      data : total
    })


    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

exports.payfine =  async (req, res) => {
  try {
    const { id , pay } = req.body;

    //validation
    if (!id || !pay) {
      return res.status(400).json({
        success: false,
        message: "Missing requirements.",
      });
    }

    const issue = await Issue.findOne({_id : id});

    //validation
    if(!issue){
      return res.status(400).json({
        success: false,
        message: "Invalid book",
      });
    }

    if(issue.fine !== Number(pay)){
      return res.status(400).json({
        success: false,
        message: "Invalid amount",
      });
    }

    if (issue.fine === 0) {
      return res.status(400).json({
        success: false,
        message: "Fine already paid",
      });
    }

    function addDaysToDate(dateString, days) {
      let date = new Date(dateString); // Convert to Date object
      date.setDate(date.getDate() + days); // Add days
      return date.toISOString().split('T')[0]; // Format back to yyyy-mm-dd
    }

    const newDate = addDaysToDate(issue.returnDate, 7);
    

    await Issue.findOneAndUpdate({_id : id},{
      returnDate : newDate,
      fine : 0
    })
    
    return res.status(200).json({
        success: true,
        message :"Fine payed and the deadline extend to 7 days", 
      });
    
    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//all books details
exports.MasterBooks = async (req, res) => {
  try {
    
      const data  = await Book.find({}).exec();

      return res.status(200).json({
        success: true,
        message: "data fetched",
        data
      });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

// all memberships
exports.allMemberships = async (req, res) => {
  try {
    
      const data  = await Membership.find({}).populate({
        path : "userId",
        populate : {path : "details"}
      }).exec();

      return res.status(200).json({
        success: true,
        message: "data fetched",
        data
      });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};

//all axtive issues
exports.allIssuesDetails = async (req, res) => {
  try {
      const data  = await Issue.find({}).populate("userId").populate("bookId").exec();

      return res.status(200).json({
        success: true,
        message: "data fetched",
        data
      });

    }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Process failed.",
      error: err.message,
    });
  }
};