import React from 'react';
import EditBook from './EditBook'

const Book = props => {
   return (
      <React.Fragment>
         {
            props.book.user_id === parseInt(localStorage.getItem('user_id')) ?

               <div className='single-book' >
                  <h4 className='book-title'>{props.book.title}</h4>

                  <img alt="" className='book-cover' src={props.book.image} onClick={() => props.showBookDetails(props.book)} />
                  <h5 className='author'> by: {props.book.author} </h5>
                  <div className='edit-buttons'>
                     <span className='edit-button' onClick={() => props.showEdit(props.book)}>Edit</span>
                     <span className='delete-button' onClick={() => props.handleDelete(props.book.id)}>Delete</span>
                  </div>
               </div >

               :

               <div className='single-book' onClick={() => props.showBookDetails(props.book)}>
                  <h4 className='book-title'>{props.book.title}</h4>

                  <img alt="" className='book-cover' src={props.book.image} />
                  <h5 className='author'>{props.book.author}</h5>
               </div >
         }
      </React.Fragment>
   )
}
export default Book;
// Add if (classname == "myBooks"){
//    render the book with the additional delete and update buttons
// }
