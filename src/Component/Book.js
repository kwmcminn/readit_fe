import React from 'react';

const Book = props => {
return (
   <div>
   <h3>{props.book.title}</h3>
   <img src={props.book.image}/>
   <h3>{props.book.paragraph}</h3>

   </div>
   )
};

export default Book;
