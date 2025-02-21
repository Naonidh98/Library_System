import React ,{useEffect, useState} from "react";
import { masterIssuesDetails } from "../services/operation";
import { useDispatch } from "react-redux";
const MasterIssue = ({setActiveIssue})=>{

    const [data,setData] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(masterIssuesDetails(setData))},[])

    return <div>
        {
            data && <div>
            <table class="table-auto mx-auto mt-8">
            <thead>
            <tr>
             <th className="border  border-2 border-black min-w-[150px]">Serial Number</th>
             <th className="border  border-2 border-black min-w-[150px]">Name</th>
             <th className="border  border-2 border-black min-w-[150px]">Date of Issue</th>
             <th className="border  border-2 border-black min-w-[150px]">Date of return</th>
            </tr>
            </thead>
            <tbody>
            {
             data.map((item,index)=>{return  <tr className="my-2" key={index}>
             <td className="text-center">{item?.bookId.serialNo}</td>
             <td className="text-center">{item?.userId.name}</td>
             <td className="text-center">{item?.issueDate}</td>
             <td className="text-center">{item?.returnDate}</td>
           </tr>})
            }
            </tbody>
            </table>
            
            </div>
        }

<div onClick={()=>{setActiveIssue(false);}} className="w-fit m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
</div>

    </div>
}

export default MasterIssue;