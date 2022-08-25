import React from 'react'

const BookCard = ({bookdata}) => {
  return (
    <div>
       <div>
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="rohit" width={300}/>
        <div>{bookdata.book_name}</div>
        <div>{bookdata.release_year}</div>
        <div>{bookdata.category}</div>

       </div>
    </div>
  )
}

export default BookCard
