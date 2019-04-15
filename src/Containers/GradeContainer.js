import React from 'react';
import Book from '../Component/Book'

class GradeContainer extends React.Component {
   render() {
      return (
         <div>
            {this.props.first.map((book) => {
               return <Book book={book} className='my-books' />
            })}
         </div >

      );
   }


}

export default GradeContainer;
/* {
                  this.props.kindergarten.map((book) => {
                     return <Book book={book} className='my-books' />
                  })
               } */

// {this.props.kindergarten.map((book) => {
//    return <Book book={book} className='kindergarten' />
// })}

// {this.props.first.map((book) => {
//    return <Book book={book} className='first-grade' />
// })}

// {this.props.second.map((book) => {
//    return <Book book={book} className='second-grade' />
// })}

// {this.props.third.map((book) => {
//    return <Book book={book} className='third-grade' />
// })}