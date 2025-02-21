import React, {useState ,useEffect} from "react";
import {useDispatch} from "react-redux";
import { masterBooksDetails , bookByName } from "../services/operation";

const BookAvail = ({setAvail}) =>{

    const [result,setResults] = useState(null);
    const [data,setData] = useState(null);

    const [name, setName] = useState('');


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(masterBooksDetails(setData))
    },[])


    return <div>
            {
                !result && <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
                <h2 className="underline"> Book Available </h2>
  
                <form>
                  <div className="py-2">
                    <label htmlFor="id">Enter Book Name : </label>
                    <input
                      type="text"
                      placeholder="Admin"
                      id="id"
                      required
                    />
                    <select onChange={(e)=>{setName(e.target.value)
                    }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >   
                        <option value={''}>-select-</option>

                        {
                            data?.map((item,index)=>{return <option key={item._id} value={item.name}>{item.name}</option>})
                        }
                    </select>
                  </div>
                  {
                    /* <div className="py-2">
                    <label htmlFor="id">Enter Author Name : </label>
                    <input
                      type="text"
                      placeholder="Admin"
                      id="id"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div> */
                  }
                </form>
  
                <div className="w-full flex justify-evenly">
                  <button
                    onClick={() => {
                        setAvail(false)
                    }}
                    className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Back
                  </button>
                  <button onClick={()=>{
                    dispatch(bookByName({name : name}, setResults))
                  }} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Search
                  </button>
                </div>
              </div>
            }

            <div>
            {result && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline"> Results Book Available</h2>

              <table class="table-auto mx-auto mt-8">
                <thead>
                  <tr>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Book Nmae
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Author Name
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Serial Number
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Available
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{result.name}</td>
                    <td>{result.author}</td>
                    <td>{result.serialNo}</td>
                    <td>{result.quantity > 0 ? 'Y' : 'N'}</td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full flex justify-evenly">
                <button onClick={()=>{
                    setResults(null);
                }} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

    </div>
}

export default BookAvail;