import React, {useState ,useEffect} from "react";
import {useDispatch ,useSelector} from "react-redux";
import { allBookDetails , bookByName ,bookIssue} from "../services/operation";

const BookIssue = ({setIssue}) =>{

    const [id,setId] = useState('');
    const [issueDate,setIssueDate] = useState('');
    const [returnDate,setReturnDate] = useState('');
    const [remarks,setRemark] = useState('');

    const [data,setData] = useState(null);

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(allBookDetails(setData))
    },[])


    function submitHandler(e){
        e.preventDefault();
        const data = {
            id : id ,
            issueDate,
            returnDate,
            remarks,
            userId : user._id
        }
        
        dispatch(bookIssue(data))
        
    }

    return <div>

<div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline"> Book issue</h2>

              <form onSubmit={submitHandler}>
                <div className="py-2">
                  <label htmlFor="id">Enter Book Name : </label>
                 
                  <select onChange={(e)=>{setId(e.target.value); 
                  
                    }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >   
                        <option value={''}>-select-</option>

                        {
                            data?.map((item,index)=>{return <option key={item._id} value={item._id}>{item.name}</option>})
                        }
                    </select>
                </div>
                
                <div className="py-2">
                  <label htmlFor="id">Issue Date : </label>
                  <input
                    type="date"
                    placeholder="Enter date"
                    id="id"
                    onChange={(e)=>{setIssueDate(e.target.value)}}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Return Date : </label>
                  <input
                    type="date"
                    placeholder="Enter date"
                    id="id"
                    onChange={(e)=>{setReturnDate(e.target.value)}}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Remarks : </label>
                  <input
                    type="textarea"
                    placeholder="Enter remark"
                    id="id"
                    onChange={(e)=>{setRemark(e.target.value)}}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </form>

              <div className="w-full flex justify-evenly">
                <div
                  onClick={() => {
                    setIssue(false)
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </div>
                <button onClick={(e) => {
                        submitHandler(e)
                }} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Confirm
                </button>
              </div>
            </div>

    </div>
}

export default BookIssue;