import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";

const Header = () => {

  const { user, token } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [showBack,setShowBack] = useState(false);

  return (
    <div className="flex justify-between items-center">

    <div onClick={()=>{navigate("/")}}>Chart</div>

    <div>

    <div></div>
    
   
    <div>
      {
        !token && showBack && <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={ ()=>{ setShowBack(false); navigate('/')} }>
          back
        </button>
      }
    </div>

   <div>
    {!token && !showBack && <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={ ()=>{ setShowBack(true); navigate('/user/login')} }>
    User login
    </button>}
    {
      !token && !showBack && <button onClick={()=>{ setShowBack(true); navigate('/admin/login')}} className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
      Admin login
      </button>
    }

   </div>
   

    
   

    </div>

    </div>
  );
};

export default Header;
