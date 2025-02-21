import React, {useState ,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userIssuedBook,calculateFine,payFine} from "../services/operation";

const BookFine = ({setfine}) =>{

    const [data,setData] = useState(null);
  
    const [issueId,setIssueId] = useState('');
    const [fine ,setFine] = useState(''); 
    const [amt,setAmount] = useState('');

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(userIssuedBook({userId : user._id} , setData))
    },[])


    function submitHandler(e){
        e.preventDefault();
        const data = {id : issueId};
        dispatch(calculateFine(data,setFine));
    }   

    return <div>

            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline">Pay fine</h2>

              <form onSubmit={submitHandler}>
              <div className="py-2">
                  {
                    fine === '' && <div>
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
                  }
                </div>
                

                <div className="py-2">
                  {
                    fine !== '' && <div className="w-fit mx-auto">
                        <p>Fine : <span>{fine}</span></p>

                        <div className="flex gap-2 items-center">
                            <div>

                                <label>Pay : </label>
                                <input type="text" placeholder="Enter paid amount" onChange={(e)=>{setAmount(e.target.value)}} required/>

                            </div>

                            <button onClick={(e)=>{e.preventDefault(); dispatch(payFine({id : issueId , pay : amt}))}} className="mx-auto text-center p-2 px-4 rounded bg-black text-white">Pay</button>
                        </div>

                    </div>
                  }
                </div>

                <div className="w-full flex justify-evenly">
                <button
                  onClick={() => {
                    setfine(false);
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
                <div>
                    {
                        fine === '' && <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Confirm
                      </button>
                    }
                </div>
              </div>       

              </form>

              
            </div>

    </div>
}

export default BookFine;