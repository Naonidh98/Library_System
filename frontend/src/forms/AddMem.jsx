import React, {useState} from "react";
import { addMembership } from "../services/operation";
import { useDispatch } from "react-redux";

const AddMem = ()=>{

    const [email,setEmail] = useState('');
    const [month,setMonths] = useState('6');
    const dispatch = useDispatch();

    function submitHandler(e){
        e.preventDefault();
       

        const data= {
            email : email,
            months : Number(month)
        }  


        dispatch(addMembership(data));
        
    }

    return <div>
        <form onSubmit={submitHandler}>
    <div className="py-2">
      <label htmlFor="id">Email : </label>
      <input
        type="text"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Enter email"
        id="id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div className="py-2 flex gap-6">
      <label htmlFor="id">Months : </label>

    <div className="mtm _5wa2 _5dbb flex gap-4" id="u_0_f">
    <span  data-type="radio" data-name="gender_wrapper" id="u_0_g">
    <span >
        <input type="radio" defaultChecked name="sex" value='6' id="u_0_d" onChange={(e)=>{setMonths(e.target.value)}}/>
        <label className="m-2" htmlFor="u_0_d">6 months</label>
    </span>
    <span >
        <input type="radio" name="sex" value="12" id="u_0_e" onChange={(e)=>{setMonths(e.target.value)}}/>
        <label className="m-2" htmlFor="u_0_e">1 Year</label>
    </span>
    <span >
        <input type="radio" name="sex" value="24" id="u_0_e" onChange={(e)=>{setMonths(e.target.value)}}/>
        <label className="m-2" htmlFor="u_0_e">2 Year</label>
    </span>
    </span>
    
    </div>
    </div>

    <div>
    <div className="w-full flex justify-evenly">
      <div onClick={()=>{setEmail('')}} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
      </div>
      <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Confirm
      </button>
      </div>
    </div>

  </form></div>
}

export default AddMem;