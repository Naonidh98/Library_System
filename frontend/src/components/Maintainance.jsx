import React, {useState} from "react";
import AddMem from "../forms/AddMem";
import UpdateMem from "../forms/UpdateMem";
import AddBook from "../forms/AddBook";
import UpdateBook from "../forms/UpdateBook";
import AddDetails from "../forms/AddDetails";
import UpdateDetails from "../forms/UpdateDetails";

const Maintainance = ()=>{
    
    const [mem,showMem] = useState(false);
    const [book,showBook] = useState(false);
    const [manag,showMag] = useState(false);

    const[addForm,setForm] = useState(true);

    return <div className="w-[80%] mx-auto">

        <div>
        <p
          className="text-[#03045e] cursor-pointer"
          onClick={()=>{showBook(false); showMag(false); showMem(true); }}
        >
          Membership
        </p>
        <div>
            {
                mem && <div className="min-w-[350px] m-6 border border- border-black p-2 rounded">
                    <div className="flex gap-16">
                    <button onClick={()=>{setForm(true)}} className={`${addForm ? "underline" : ""}`}>Add</button>
                    <button onClick={()=>{setForm(false)}} className={`${addForm ? "" : "underline"}`}>Update</button>
                    </div>
                    <div>
                        {
                            addForm && <div><AddMem/></div>
                        }
                    </div>   
                    <div>
                        {
                            !addForm && <div><UpdateMem/></div>
                        }
                    </div>   
                </div>
            }
        </div>
        </div>

        <div>
        <p
          className="text-[#03045e] cursor-pointer"
          onClick={()=>{ showMag(false); showMem(false); showBook(true);}}
        >
          Books
        </p>
        <div>
            {
                book && <div className="min-w-[350px] m-6 border border- border-black p-2 rounded">
                    <div className="flex gap-16">
                    <button onClick={()=>{setForm(true)}} className={`${addForm ? "underline" : ""}`}>Add</button>
                    <button onClick={()=>{setForm(false)}} className={`${addForm ? "" : "underline"}`}>Update</button>
                    </div>
                    <div>
                        {
                            addForm && <div><AddBook/></div>
                        }
                    </div>   
                    <div>
                        {
                            !addForm && <div><UpdateBook/></div>
                        }
                    </div>   
                </div>
            }
        </div>
        </div>

        <div>
        <p
          className="text-[#03045e] cursor-pointer"
          onClick={()=>{  showMem(false); showBook(false); showMag(true);}}
        >
          User management
        </p>
        <div>
            {
                manag && <div className="min-w-[350px] m-6 border border- border-black p-2 rounded">
                    <div className="flex gap-16">
                    <button onClick={()=>{setForm(true)}} className={`${addForm ? "underline" : ""}`}>Add</button>
                    <button onClick={()=>{setForm(false)}} className={`${addForm ? "" : "underline"}`}>Update</button>
                    </div>
                    <div>
                        {
                            addForm && <div><AddDetails/></div>
                        }
                    </div>   
                    <div>
                        {
                            !addForm && <div><UpdateDetails/></div>
                        }
                    </div>   
                </div>
            }
        </div>
        </div>

</div>}

export default Maintainance