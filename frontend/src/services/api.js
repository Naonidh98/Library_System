const BASE_URL = "http://localhost:8800/api/v1";

export const authApi = {
  login: BASE_URL + "/login",
  signup: BASE_URL + "/signup",
};

export const bookApi  = {
  home : BASE_URL + "/book/home",
  addMembership : BASE_URL + "/add/membership",
  updateMembership : BASE_URL + "/update/membership",
  bookAdd : BASE_URL + "/book/add",
  bookUpdate : BASE_URL + "/book/update",
  userDetails : BASE_URL + "/user/details/add",
  userDetailsUpdate : BASE_URL + "/user/details/update",
  allBooks : BASE_URL + "/book/all",
  bookbyid : BASE_URL + "/book/id",
  bookbyname : BASE_URL + "/book/name",
  bookIssue : BASE_URL + "/book/issue",
  userIssueBook : BASE_URL + "/user/issue/book",
  bookReturn  : BASE_URL + "/user/issue/return",
  calcFine : BASE_URL + "/fine/calculate",
  payFine  : BASE_URL + "/fine/pay"  ,
  masterBooks : BASE_URL + "/master/book/all",
  masterMembership : BASE_URL + "/master/membership/all",
  masterIssues : BASE_URL + "/master/issues/all"
}

