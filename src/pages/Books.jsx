import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookList from '../Components/BookList'
import FilterSort from '../Components/FilterSort'
import { getbooks } from '../Redux/AppReducer/action'
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom'

const Books = () => {


  return (
    <div>
       <h2>Books</h2>
       <BookPageWrapper>
        <FIlterSortWrapper>
       <FilterSort/>
       </FIlterSortWrapper>
       <BookListWrapper>
       <BookList />
       </BookListWrapper>
       </BookPageWrapper>
    </div>
  )
}

export default Books

const BookPageWrapper = styled.div`
display:flex;
`
const FIlterSortWrapper = styled.div`
 width:300px;

 `

 const BookListWrapper = styled.div`
 width:100%;
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(310px,max-content));
 grid-gap:16px;
 justify-content:center;
 padding:initial

`