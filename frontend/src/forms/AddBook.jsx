import React ,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../services/operation";

const AddBook = ()=>{

    const [name,setname] = useState('');
    const [author,setAuthor] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [serial,setSerial] = useState('');
    const [quantity,setQuantity] = useState('');

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.user);
    
        function submitHandler(e){
            e.preventDefault();
            const data= {
                name : name,
                author,
                category,
                price,
                serialNo : serial,
                quantity : Number(quantity),
                token
            }  
    
            dispatch(addBooks(data));
        }

    return <div>
        <div>
        <form onSubmit={submitHandler}>
    <div className="py-2">
      <label htmlFor="id">Name : </label>
      <input
        type="text"
        onChange={(e)=>{setname(e.target.value)}}
        placeholder="Enter book name"
        id="id"
        value={name}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="py-2">
      <label htmlFor="id">Author : </label>
      <input
        type="text"
        onChange={(e)=>{setAuthor(e.target.value)}}
        placeholder="Enter author name"
        id="id"
        value={author}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>    

    <div className="py-2">
      <label htmlFor="id">Category : </label>
      <input
        type="text"
        onChange={(e)=>{setCategory(e.target.value)}}
        placeholder="enter category"
        id="id"
        value={category}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="py-2">
      <label htmlFor="id">Price : </label>
      <input
        type="text"
        onChange={(e)=>{setPrice(e.target.value)}}
        placeholder="price"
        id="id"
        value={price}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="py-2">
      <label htmlFor="id">Serail Number : </label>
      <input
        type="text"
        onChange={(e)=>{setSerial(e.target.value)}}
        placeholder="serial"
        id="id"
        value={serial}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div className="py-2">
      <label htmlFor="id">Quantity : </label>
      <input
        type="text"
        onChange={(e)=>{setQuantity(e.target.value)}}
        placeholder="quantity"
        id="id"
        value={quantity}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div>
    <div className="w-full flex justify-evenly">
      <div onClick={()=>{
        setAuthor('');
        setname('');
        setCategory('');
        setPrice('');
        setQuantity('');
        setSerial('');
      }} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Cancel
      </div>
      <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Confirm
      </button>
      </div>
    </div>

  </form></div>
    </div>
}

export default AddBook