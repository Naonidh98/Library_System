import { apiConnector } from "./apiConnector";
import { authApi } from "./api";
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
