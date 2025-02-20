import React from "react";
const ProductDetails = () => {
    return (
      <div>
  
       <h2 className="text-center text-xl font-semibold mt-12">Product details</h2>

       <table class="table-auto mx-auto mt-8">
  <thead>
    <tr>
      <th className="border  border-2 border-black min-w-[350px]">Code Number From</th>
      <th className="border  border-2 border-black min-w-[350px]">Code Number To</th>
      <th className="border  border-2 border-black min-w-[350px]">Category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </tbody>
</table>

</div>
  
      
    );
  };
  
  export default ProductDetails;
  