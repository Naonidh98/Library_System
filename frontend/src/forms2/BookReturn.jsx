import React, {useState ,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userIssuedBook, userIssuedBookReturn} from "../services/operation";

const BookReturn = ({setReturn}) =>{

    const [data,setData] = useState(null);
  
    const [issueId,setIssueId] = useState('');
    


    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(userIssuedBook({userId : user._id} , setData))
    },[])


    function submitHandler(e){
        e.preventDefault();
        const data = {id : issueId};
        dispatch(userIssuedBookReturn(data))
    }   

    return <div>
        <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline">Return Book</h2>

              <form onSubmit={submitHandler}>
                <div className="py-2">
                  <label htmlFor="id">Enter Book Name : </label>
                  <select onChange={(e)=>{setIssueId(e.target.value)
                    }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >   
                        <option value={''}>-select-</option>

                        {
                            data?.map((item,index)=>{return <option key={item._id} value={item._id}>{item.bookId.name}</option>})
                        }
                    </select>
                </div>
                
                <div>
                </div>
                
                <div className="w-full flex justify-evenly">
                <div
                  onClick={() => {
                    setReturn(false);
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </div>
                <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Confirm
                </button>
              </div>

              </form>

              
            </div>
    </div>
}

export default BookReturn;