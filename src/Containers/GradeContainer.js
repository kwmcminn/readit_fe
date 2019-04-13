import React from 'react';
import Book from '../Component/Book';

class GradeContainer extends React.Component {
   componentDidUpdate(){
      console.log('hi', this.props)
   }

   render() {
      return (
         <div className={this.props.className}>
         // <div className='grade-header' />
         // <span className='grade-title'>{this.props.className}</span>
         // <div className='grade-body'>
         // <span></span>
         // <img className='book-cover'/>
         // <span></span>
         //
         // </div>
         // <div className='grade-footer'/>
         </div>
      );
   }


}

export default GradeContainer;
