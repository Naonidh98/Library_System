import React ,{useState} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addDetails } from "../services/operation";

const AddDetails = ()=>{

    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');
    
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.user);
    

        function submitHandler(e){
            e.preventDefault();
           
    
            const data= {
                email,
                contact,
                address,
                token
            }  
    
    
            dispatch(addDetails(data));
            
        }

    return <div>
        <div>
        <form onSubmit={submitHandler}>
    <div className="py-2">
      <label htmlFor="id">Email : </label>
      <input
        type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Enter user email"
        id="id"
        value = {email}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="py-2">
      <label htmlFor="id">Contact : </label>
      <input
        type="text"
        onChange={(e)=>{setContact(e.target.value)}}
        placeholder="Enter Contact"
        id="id"
        value={contact}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>    

    <div className="py-2">
      <label htmlFor="id">Address : </label>
      <input
        type="text"
        onChange={(e)=>{setAddress(e.target.value)}}
        placeholder="enter address"
        id="id"
        value={address}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    

    <div>
    <div className="w-full flex justify-evenly">
      <div onClick={()=>{
        setEmail('')
        setAddress('')
        setContact('')
      }} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
      </div>
      <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Confirm
      </button>
      </div>
    </div>

  </form></div>
    </div>
}

export default AddDetails;