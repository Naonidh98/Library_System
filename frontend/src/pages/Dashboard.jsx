import React, { useState } from "react";
import ProductDetails from "../components/ProductDetails";
import Transaction from "../components/Transaction";
const Dashboard = () => {

    const [text,setText] = useState('');

    const [details,setDetails] = useState(true);

    return (
      <div>
        
        <div className="text-center text-xl font-bold mt-4">
            Admin dashboard
        </div>

        <div className="flex justify-between my-4">
            <div  onClick={()=>{setDetails(false); setText('Maintenance')}} className={`cursor-pointer w-[33%] text-center  p-2 ${text === 'Maintenance' ? 'bg-black text-white' : ''}`}>Maintenance</div>
            <div onClick={()=>{setDetails(false); setText('Reports')}} className={`cursor-pointer w-[33%] text-center p-2 ${text === 'Reports' ? 'bg-black text-white' : ''}`}>Reports</div>
            <div onClick={()=>{setDetails(false); setText('Transactions')}} className={`cursor-pointer w-[33%] text-center p-2 ${text === 'Transactions' ? 'bg-black text-white' : ''}`}>Transactions</div>
        </div>

        
        <div>
                {
                   details &&    <ProductDetails/>
                }
        </div>

        <div>
          {
            text==='Transactions' && <div> <Transaction/> </div>
          }
        </div>
        

      </div>
    );
  };
  
export default Dashboard;