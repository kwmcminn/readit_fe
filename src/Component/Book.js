import React from 'react';

const Book = props => {
   return (
      <div className='single-book' onClick={() => props.showBookDetails(props.book)}>
         <h4 className='book-title'>{props.book.title}</h4>

               <img alt="" className='book-cover' src={props.book.image} />
         <h5 className='author'> Author Goes Here </h5>
      </div >
   )
}
export default Book;
