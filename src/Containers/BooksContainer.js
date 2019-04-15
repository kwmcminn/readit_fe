import React, { Component } from 'react';
import GradeContainer from './GradeContainer';

class BooksContainer extends Component {


   render() {
      return (
         <div className='book-container'>
            {console.log("props in books container", this.props)}
            <GradeContainer first={this.props.first} className='first-grade' />
            {/* 
            <GradeContainer books={this.props.books} className='my-books' /> */}
            {/* <GradeContainer kindergarten={this.props.kindergarten} className='kindergarten' /> */}

            {/* 
            



            <GradeContainer first={this.props.first} className='first-grade' />



            <GradeContainer second={this.props.second} className='second-grade' />



            <GradeContainer third={this.props.third} className='third-grade' /> */}


         </div>
      );
   }
}


export default BooksContainer;
