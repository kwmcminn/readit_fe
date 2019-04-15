import React from 'react';

const Book = props => {
   console.log('book props', props);
   return (
      <div className='single-book'>
         <h4 className='book-title'>{props.book.title}</h4>
         <img alt="" className='book-cover' src={props.book.image} />
         <h5 className='author'>{props.book.author}</h5>
      </div >
   )
}
export default Book;
