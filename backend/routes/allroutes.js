const express = require("express");
const router = express.Router();

//import controllers
const {signup,login,addUserDetails,updateUserDetails,addBook,updateBook,addMembership,updateMembership,booksForHome,allBook,bookbyid,bookbyname,issueBook,userIssueBook,returnBook,calcFine,payfine} =  require("../controllers/auth")

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

//get all books
router.get("/book/all",allBook);

//get book by id
router.post("/book/id",bookbyid);

//get book by id
router.post("/book/name",bookbyname);

//get book by id
router.post("/book/issue",issueBook);

//user's issued books
router.post("/user/issue/book",userIssueBook);

//return issued books
router.post("/user/issue/return",returnBook);

//calc fine
router.post("/fine/calculate",calcFine);

//pay fine
router.post("/fine/pay",payfine);

module.exports = router;