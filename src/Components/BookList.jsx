import React,{useEffect} from 'react'
import BookCard from './BookCard'
import  styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { getbooks } from '../Redux/AppReducer/action'
import { Link, useLocation, useSearchParams } from 'react-router-dom'


const BookList = () => {
  const dispatch = useDispatch()
  const books = useSelector(state=> state.AppReducer.books)
  const [searchParams] = useSearchParams()
  const location = useLocation()
 
     useEffect(()=>{
         if(books.length===0 || location.search){
          const sortBy= searchParams.get("sortBy")
          const getBooksParams = {
            params:{
              category:searchParams.getAll("category"),
              _sort: sortBy && "release_year",
              _order:sortBy
            }
          }
             dispatch(getbooks(getBooksParams))
         }
     },[location.search])
  return (
    <>
      {books.length>0 && books.map(singlebook=>{
        return(  <BookCardWrapper key={singlebook.id}>
             <Link to={`/books/${singlebook.id}`}> <BookCard bookdata = {singlebook}/></Link>
            </BookCardWrapper>
        )
      })}
    </>
  )
}

export default BookList

const BookCardWrapper = styled.div`

padding:5px;
width:310px
`