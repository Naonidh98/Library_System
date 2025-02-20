import React from "react";
import { Route, Routes } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import {logout} from "../src/services/operation"


const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.user);
  console.log("user",user);
  console.log("token",token);
  

  return (
    <div>

      <Header/>

      <Routes>
        <Route path="/" element={<div className="text-center text-xl font-bold mt-12">Home - Welcome to library management system</div>}/>
        <Route path="/user/login" element={<UserLogin/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<div className="text-center text-xl font-bold mt-12">404 Not Found</div>}/>
      </Routes>


      <div className="flex justify-end">
        {
          user && <div className="w-fit m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{dispatch(logout(navigate))}}>
          Log out
        </div>
        }
      </div>

    </div>

    
  );
};

export default App;
