const express = require("express");
const router = express.Router();

//import controllers
const {signup,login,addUserDetails,updateUserDetails,addBook,updateBook,addMembership,updateMembership,booksForHome} =  require("../controllers/auth")

//sign up
router.post("/signup",signup);

//login 
router.post("/login",login);

//add user details
router.post("/user/details/add",addUserDetails);

//update user details
router.post("/user/details/update",updateUserDetails);

//add book 
router.post("/book/add",addBook);

//update book
router.post("/book/update",updateBook);

//add mem 
router.post("/add/membership",addMembership);

//update mem
router.post("/update/membership",updateMembership);

//book for home
router.get("/book/home",booksForHome);


module.exports = router;