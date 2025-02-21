import { apiConnector } from "./apiConnector";
import { authApi ,bookApi } from "./api";
import { setUser, setToken } from "../slices/userSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

//login
export function login(data, setLoading, navigate) {
    return async (dispatch) => {
      setLoading(true);
      const toastId = toast.loading("Loading....");
      try {
        const response = await apiConnector("POST", authApi.login, data);
  
        //response
        console.log(response);
  
        //failure
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        //success message
        toast.success(response.data.message);
  
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        localStorage.setItem("token", JSON.stringify(response?.data?.token));
  
        dispatch(setUser(response?.data?.user));
        dispatch(setToken(response?.data?.token));
  
        navigate("/dashboard");
      } catch (error) {
        console.log("API ERROR............", error);
        toast.error(error?.response?.data?.message);
      }
      toast.dismiss(toastId);
      setLoading(false);
    };
}
  
//logout
export function logout(navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading....");
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        dispatch(setUser(null));
        dispatch(setToken(null));
  
        //success message
        toast.success("user logout");
  
        navigate("/");
      } catch (error) {
        toast.error("Failed to logout");
      }
      toast.dismiss(toastId);
    };
}

//sign up
export function signup(data, navigate, setLoading) {
    return async (dispatch) => {
      setLoading(true);
      const toastId = toast.loading("Loading....");
      try {
        const response = await apiConnector("POST", authApi.signup, data);
  
        //response
        console.log(response);
  
        //failure
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        localStorage.removeItem("profile");
        navigate("/");
  
        //success message
        toast.success(response.data.message);
      } catch (error) {
        console.log("SENDOTP API ERROR............", error);
        toast.error(error?.response?.data?.message);
      }
      toast.dismiss(toastId);
      setLoading(false);
    };
}

//home books
export function bookHome(setData, setLoading) {
  return async (dispatch) => {
    setLoading(true);
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", bookApi.home);

      //response
      setData(response.data.data);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    setLoading(false);
  };
}

//add membership
export function addMembership(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.addMembership, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//update mem
export function updateMembership(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.updateMembership, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//add books
export function addBooks(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.bookAdd, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//update books
export function updateBooks(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.bookUpdate, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//add details
export function addDetails(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.userDetails, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

export function updateDetails(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.userDetailsUpdate, data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//all books
export function allBookDetails(setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", bookApi.allBooks );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//book by id
export function bookById(data,setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("POST", bookApi.bookbyid ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

export function bookByName(data,setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.bookbyname ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//book issue
export function bookIssue(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.bookIssue ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

  

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//user issued books
export function userIssuedBook(data,setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.userIssueBook ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//return book
export function userIssuedBookReturn(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.bookReturn ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //success message
      toast.success(response.data.message);
      
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//calc fine
export function calculateFine(data,setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.calcFine ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}


//pay fine
export function payFine(data) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {

      console.log(data);
      

      const response = await apiConnector("POST", bookApi.payFine ,data);

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      //setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//master books
//all books
export function masterBooksDetails(setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", bookApi.masterBooks );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//all memberships
export function masterMembershipDetails(setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", bookApi.masterMembership );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}

//all master issues
export function masterIssuesDetails(setData) {
  return async (dispatch) => {
   
    const toastId = toast.loading("Loading....");
    try {
      const response = await apiConnector("GET", bookApi.masterIssues );

      //response
      console.log(response);

      //failure
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setData(response.data.data);

      //success message
      toast.success(response.data.message);
    } catch (error) {
      console.log("API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }
    toast.dismiss(toastId);
    
  };
}