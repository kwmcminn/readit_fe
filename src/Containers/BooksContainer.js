import React, { Component } from 'react';
import Book from '../Component/Book'

class BooksContainer extends Component {


   render() {
      return (
         <div className='books-container'>
            <div className='grade-container'>
               <button className='back-button'></button>
               <h1 className='grade-title'>Kindergarten</h1>
                  <div className='three-books'>
                     {this.props.kindergarten.slice(this.props.kindergartenIndex, this.props.kindergartenIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
               <button className='forward-button'></button>
            </div>
            <div className='grade-container'>
               <button className='back-button'></button>
               <h1 className='grade-title'>First Grade</h1>
                  <div className='three-books'>
                     {this.props.first.slice(this.props.firstIndex, this.props.firstIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
               <button className='forward-button'></button>
            </div>
            <div className='grade-container'>
               <button className='back-button'></button>
               <h1 className='grade-title'>Second Grade</h1>
                  <div className='three-books'>
                     {this.props.second.slice(this.props.secondIndex, this.props.secondIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
               <button className='forward-button'></button>
            </div>
            <div className='grade-container'>
               <button className='back-button'></button>
               <h1 className='grade-title'>Third Grade</h1>
                  <div className='three-books'>
                     {this.props.third.slice(this.props.thirdIndex, this.props.thirdIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
               <button className='forward-button'></button>
            </div>
         </div>

      );
   }
}




export default BooksContainer;
