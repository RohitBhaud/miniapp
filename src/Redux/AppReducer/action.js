 import * as types from "./actionTypes";  
 import axios from "axios";

 
const  getbooks= (params) =>(dispatch)=>{
    dispatch(getBooksRequest())
axios
.get("https://jsonback123.herokuapp.com/api/books" ,params)
.then((r)=> dispatch(getBooksSuccess(r.data)))
.catch((e)=> dispatch(getBooksFailure(e)))
}

const getBooksRequest = ()=>{
    return{
        type: types.GET_BOOKS_REQUEST,
    }
}

const getBooksSuccess = (payload)=>{
    return{
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksFailure = ()=>{
    return{
        type: types.GET_BOOKS_FAILURE,
    }
}


export {getbooks,getBooksRequest,getBooksFailure,getBooksSuccess}