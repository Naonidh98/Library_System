import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {signup} from "../services/operation";
import {useNavigate} from "react-router-dom"

const Signup = () =>{

const [loading,setLoading] = useState(false); 
const [email,setEmail] = useState('');
const [name,setName] = useState('');
const [password,setPassword] = useState('');
const [type,setType] = useState('admin');

const dispatch = useDispatch();
const navigate = useNavigate();


function submitHandler(e){
    e.preventDefault();
    const data = {
        name : name,
        email : email,
        password : password,
        type : type
    }
    console.log(data);
    dispatch(signup(data,navigate,setLoading));
}

if(loading) {return <div className="text-center my-4">Loading..</div>}


return <div>

<div>

<h2 className="text-xl  font-bold text-center">Sign up</h2>

<form className="border border-blue-500 border-opacity-100 p-4 rounded w-[60%] mx-auto my-5" onSubmit={submitHandler}>

  <div>

  <div>
  <label htmlFor="id">Name : </label>
  <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter full name" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>

  <label htmlFor="id">Email : </label>
  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email address" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>

  <div className="my-4">
  <label htmlFor="pass">Password : </label>
  <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter password" id="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>

  <div className="my-4">
  <label htmlFor="pass">Account : </label>
  <select value={type} onChange={(e)=>{setType(e.target.value)}}>
    <option value={'admin'} defaultValue={true}>Admin</option>
    <option value={'user'}>User</option>
  </select>
  </div> 


  <div className="w-full flex justify-evenly">
  <button onClick={()=>{setName(); setEmail(''); setPassword('');}} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
  Cancel
  </button>
  <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
  Sign up
  </button>
  </div>

</form>

</div>

    </div>
}

export default Signup;