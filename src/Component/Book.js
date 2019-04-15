import React from 'react';

const Book = props => {

   return (
      <div className='grade-header'>
         <h2 className='grade-title'>{props.book.title}</h2>
         <div className='grade-body'>
            <img alt="" className='book-cover' src={props.book.image} />
         </div>
         <div className='grade-footer' />
      </div >
   )
}
export default Book;
