import React, { Component } from 'react';
import Book from '../Component/Book'

class BooksContainer extends Component {


   render() {
      return (
         <div className='book-container'>
            <div className='kindergarten'>
               <h1 className='grade-header'>Kindergarten</h1>
               {this.props.kindergarten.slice(this.props.kindergartenIndex, this.props.kindergartenIndex + 3).map((book) => {
                  return <Book book={book} showBookDetails={this.props.showBookDetails} />
               })}
            </div>
         </div>
      );
   }
}
// <div className='my-books'>
// </div >
// <div className='kindergarten'>
//    <h1 className='grade-header'>Kindergarten</h1>
//    {this.props.kindergarten.slice(this.props.kindergartenIndex, this.props.kindergartenIndex + 3).map((book) => {
//       return <Book book={book} showBookDetails={this.props.showBookDetails}/>
//    })}
// </div>
// <div className='first-grade'>
//    <h1 className='grade-header'>First Grade</h1>
//    {this.props.first.slice(this.props.firstIndex, this.props.firstIndex + 3).map((book) => {
//       return <Book book={book} showBookDetails={this.props.showBookDetails}/>
//    })}
// </div>
// <div className='second-grade'>
//    <h1 className='grade-header'>Second Grade</h1>
//    {this.props.second.slice(this.props.secondIndex, this.props.secondIndex + 3).map((book) => {
//       return <Book book={book} showBookDetails={this.props.showBookDetails}/>
//    })}
// </div>
// <div className='third-grade'>
//    <h1 className='grade-header'>Third Grade</h1>
//    {this.props.third.slice(this.props.thirdIndex, this.props.thirdIndex + 3).map((book) => {
//       return <Book book={book} showBookDetails={this.props.showBookDetails}/>
//    })}
// </div>

// <GradeContainer kindergarten={this.props.kindergarten} className='kindergarten' />
// <GradeContainer first={this.props.first} className='first-grade' />
// <GradeContainer second={this.props.second} className='second-grade' />
// <GradeContainer third={this.props.third} className='third-grade' />

export default BooksContainer;
