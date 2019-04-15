import React, { Component } from 'react';
import GradeContainer from './GradeContainer';
import Book from '../Component/Book'

class BooksContainer extends Component {


   render() {
      return (
          <div className='book-container'>
             <div className='my-books'>
             </div>
               <div className='kindergarten'>
                  {this.props.kindergarten.map((book) => {
                     return <Book book={book}/>
                  })}
               </div>
               <div className='first-grade'>
                  {this.props.first.map((book) => {
                     return <Book book={book}/>
                  })}
               </div>
               <div className='second-grade'>
                  {this.props.second.map((book) => {
                     return <Book book={book}/>
                  })}
               </div>
               <div className='third-grade'>
                  {this.props.third.map((book) => {
                     return <Book book={book}/>
                  })}
               </div>
         </div>
      );
   }
}

// <GradeContainer kindergarten={this.props.kindergarten} className='kindergarten' />
// <GradeContainer first={this.props.first} className='first-grade' />
// <GradeContainer second={this.props.second} className='second-grade' />
// <GradeContainer third={this.props.third} className='third-grade' />

export default BooksContainer;
