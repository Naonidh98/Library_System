import React  , {useState , useEffect} from "react";

import { useDispatch } from "react-redux";
import { bookHome } from "../services/operation";

const ProductDetails = () => {

  const dispatch = useDispatch();
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);

  useState(()=>{
    dispatch(bookHome(setData,setLoading));
  },[])

    if(loading) {
      return <div className="w-[100%] text-ceter text-md my-4 p-2">Loading....</div>
    }

    return (
      <div>
  
       <h2 className="text-center text-xl font-semibold mt-12">Product details</h2>
       <p className="text-center text-sm">- recently added -</p>

       <table class="table-auto mx-auto mt-8">
  <thead>
    <tr>
      <th className="border  border-2 border-black min-w-[350px]">Book Name</th>
      <th className="border  border-2 border-black min-w-[350px]">Quantity</th>
      <th className="border  border-2 border-black min-w-[350px]">Category</th>
    </tr>
  </thead>
  <tbody>
    {
      data?.map((item,index)=>{ return <tr className="my-2" key={index}>
      <td className="text-center">{item?.name}</td>
      <td className="text-center">{item?.quantity}</td>
      <td className="text-center">{item?.category}</td>
    </tr>})
    }
  </tbody>
</table>

</div>
  
      
    );
  };
  
  export default ProductDetails;
  