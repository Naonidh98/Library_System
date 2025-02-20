import {combineReducers}  from "@reduxjs/toolkit"

//import slices
import userSlice from "../slices/userSlice";


const rootReducer = combineReducers({
    user : userSlice,
})

export default rootReducer;