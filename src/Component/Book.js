import React from 'react';

const Book = props => {
   return (
      <React.Fragment>
         {
            props.book.user_id === parseInt(localStorage.getItem('user_id')) ?

               <div className='single-book' onClick={() => props.showBookDetails(props.book)}>
                  <h4 className='book-title'>{props.book.title}</h4>

                  <img alt="" className='book-cover' src={props.book.image} />
                  <h5 className='author'> Author Goes Here </h5>
                  <button onClick={() => props.handleDelete(props.book.id)} >Edit</button>
                  <button>Delete</button>
               </div >

               :

               <div className='single-book' onClick={() => props.showBookDetails(props.book)}>
                  <h4 className='book-title'>{props.book.title}</h4>

                  <img alt="" className='book-cover' src={props.book.image} />
                  <h5 className='author'> Author Goes Here </h5>
               </div >
         }
      </React.Fragment>
   )
}
export default Book;
// Add if (classname == "myBooks"){
//    render the book with the additional delete and update buttons
// }