import React, { Component } from 'react';
import Book from '../Component/Book';

class BooksContainer extends Component {

   render() {
      return (
         <div>
            {this.props.books.map((book) => {
               return <Book book={book} />
            })}
         </div>
      );
   }

}

export default BooksContainer;
