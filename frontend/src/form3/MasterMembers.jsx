import React ,{useEffect, useState} from "react";
import { masterMembershipDetails } from "../services/operation";
import { useDispatch } from "react-redux";


const MasterMembers = ({setMemberships})=>{

    const [data,setData] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(masterMembershipDetails(setData))},[])

    return <div>
        {
            data && <div>
            <table class="table-auto mx-auto mt-8">
            <thead>
            <tr>
             <th className="border  border-2 border-black min-w-[150px]">Name</th>
             <th className="border  border-2 border-black min-w-[150px]">Contact</th>
             <th className="border  border-2 border-black min-w-[150px]">Address</th>
             <th className="border  border-2 border-black min-w-[150px]">From</th>
             <th className="border  border-2 border-black min-w-[150px]">To</th>
            </tr>
            </thead>
            <tbody>
            {
             data.map((item,index)=>{return  <tr className="my-2" key={index}>
             <td className="text-center">{item.userId.name}</td>
             <td className="text-center">{item.userId.details.contact}</td>
             <td className="text-center">{item.userId.details.address}</td>
             <td className="text-center">{item.startDate.split('T')[0]}</td>
             <td className="text-center">{item.endDate.split('T')[0]}</td>
           </tr>})
            }
            </tbody>
            </table>
            
            </div>
        }

<div onClick={()=>{setMemberships(false);}} className="w-fit m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
</div>

    </div>
}

export default MasterMembers;