import React from 'react';

const Book = props => {

   let para = JSON.parse(props.book.paragraph)


return (
   <div>
   <h3>{props.book.title}</h3>
   <img src={props.book.image}/>
      {para.map(para =>
         <h1>{para}</h1>
      )}
   </div>
   )
}
export default Book;
