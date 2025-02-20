import React , {useState}from "react";
import {useDispatch} from "react-redux"
import {login} from "../services/operation";
import {useNavigate} from "react-router-dom"

const UserLogin = () => {

const [loading,setLoading] = useState(false); 
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const dispatch = useDispatch();
const navigate = useNavigate();

function submitHandler(e){
    e.preventDefault();
    const data = {
        email : email,
        password : password,
        type : "user"
    }
    console.log(data);
    dispatch(login(data,setLoading,navigate));
}

if(loading) {return <div className="text-center my-4">Loading..</div>}

  return (
    <div>

      <h2 className="text-xl  font-bold text-center">Library Management system</h2>

      <form onSubmit={submitHandler} className="border border-blue-500 border-opacity-100 p-4 rounded w-[60%] mx-auto my-5">

        <div>
        <label htmlFor="id">User Id : </label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="User email" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>

        <div className="my-4">
        <label htmlFor="pass">Password : </label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="User password" id="pass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>

        <div className="w-full flex justify-evenly">
        <div onClick={()=>{setEmail(''); setPassword('');}} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
        Cancel
        </div>
        <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
        Login
        </button>
        </div>

      </form>

    </div>

    
  );
};

export default UserLogin;
