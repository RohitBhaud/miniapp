import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getbooks } from '../Redux/AppReducer/action';

const SingleBook = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const books  = useSelector(state=>state.AppReducer.books)
  const[currentBooks , setCurrentBooks]= useState({})

  useEffect(()=>{
      if(books.length===0){
        dispatch(getbooks())
      }
  },[books?.length, dispatch])

  useEffect(()=>{
    if(id){
     const temp=books?.find(book=> book.id=== Number(id))
     temp && setCurrentBooks(temp)
    }
  },[books,id])

  console.log(currentBooks)
  return (
    <div>
       <h2>{currentBooks?.book_name}</h2>
       <div>{currentBooks?.category}</div>
       <div>{currentBooks?.release_year}</div>
       <button><Link to={`/books/${currentBooks.id}/edit`}>Edit</Link></button>

    </div>
  )
}

export default SingleBook
