import React ,{useState} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { updateBooks } from "../services/operation";
const UpdateBook = ()=>{

  const dispatch = useDispatch();

        const [name,setname] = useState('');
        const [id,setId] = useState('');
        const [author,setAuthor] = useState('');
        const [category,setCategory] = useState('');
        const [price,setPrice] = useState('');
        const [serial,setSerial] = useState('');
        const [quantity,setQuantity] = useState('');

        const {token} = useSelector((state)=>state.user);
        
            function submitHandler(e){
                e.preventDefault();
               
        
                let data = {token};

if (id) data.id = id;
if (name) data.name = name;
if (author) data.author = author;
if (category) data.category = category;
if (price) data.price = price;
if (serial) data.serialNo = serial;
if (quantity) data.quantity = Number(quantity);
        
        
                dispatch(updateBooks(data));
                
            }
    
        return <div>
            <div>
            <form onSubmit={submitHandler}>

            <div className="py-2"> 
          <label htmlFor="id">Book Id : </label>
          <input
            type="text"
            onChange={(e)=>{setId(e.target.value)}}
            placeholder="Enter book id"
            id="id"
            value={id}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="py-2"> 
          <label htmlFor="id">Name : </label>
          <input
            type="text"
            onChange={(e)=>{setname(e.target.value)}}
            placeholder="Enter book name"
            id="id"
            value={name}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            
          />
        </div>
    
        <div>
        <div className="w-full flex justify-evenly">
          <div onClick={()=>{
        setId('');
        setAuthor('');
        setname('');
        setCategory('');
        setPrice('');
        setQuantity('');
        setSerial('');
      }}  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
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

export default UpdateBook