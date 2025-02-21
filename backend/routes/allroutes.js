const express = require("express");
const router = express.Router();

//import controllers
const {signup,login,addUserDetails,updateUserDetails,addBook,updateBook,addMembership,updateMembership,booksForHome,allBook,bookbyid,bookbyname,issueBook,userIssueBook,returnBook,calcFine,payfine,MasterBooks,allMemberships,allIssuesDetails} =  require("../controllers/auth")

//import middlewares
const {auth,isAdmin,isUser} = require("../middlewares/auth")

//sign up
router.post("/signup",signup);

//login 
router.post("/login",login);

//add user details
router.post("/user/details/add",auth,isAdmin,addUserDetails);

//update user details
router.post("/user/details/update",auth,isAdmin,updateUserDetails);

//add book 
router.post("/book/add",auth,isAdmin,addBook);

//update book
router.post("/book/update",auth,isAdmin,updateBook);

//add mem 
router.post("/add/membership",auth,isAdmin,addMembership);

//update mem
router.post("/update/membership",auth,isAdmin,updateMembership);

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

//master books
router.get("/master/book/all",MasterBooks);

//all membership
router.get("/master/membership/all",allMemberships);

//all issues
router.get("/master/issues/all",allIssuesDetails);

module.exports = router;