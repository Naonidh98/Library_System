import React ,{useEffect, useState} from "react";
import { masterBooksDetails } from "../services/operation";
import { useDispatch } from "react-redux";
const MasterBooks = ({setBooks})=>{

    const [data,setData] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(masterBooksDetails(setData))},[])

    return <div>
        {
            data && <div>
            <table class="table-auto mx-auto mt-8">
            <thead>
            <tr>
             <th className="border  border-2 border-black min-w-[150px]">Serial Number</th>
             <th className="border  border-2 border-black min-w-[150px]">Name</th>
             <th className="border  border-2 border-black min-w-[150px]">Author</th>
             <th className="border  border-2 border-black min-w-[150px]">Category</th>
             <th className="border  border-2 border-black min-w-[150px]">Status</th>
             <th className="border  border-2 border-black min-w-[150px]">Price</th>
            </tr>
            </thead>
            <tbody>
            {
             data.map((item,index)=>{return  <tr className="my-2" key={index}>
             <td className="text-center">{item?.serialNo}</td>
             <td className="text-center">{item?.name}</td>
             <td className="text-center">{item?.author}</td>
             <td className="text-center">{item?.category}</td>
             <td className="text-center">{item?.quantity >0 ? "Y" : "N"}</td>
             <td className="text-center">{item?.price}</td>
           </tr>})
            }
            </tbody>
            </table>
            
            </div>
        }

<div onClick={()=>{setBooks(false);}} className="w-fit m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
</div>

    </div>
}

export default MasterBooks;