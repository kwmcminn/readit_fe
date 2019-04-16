import React, { Component } from 'react';
import Book from '../Component/Book'

class BooksContainer extends Component {


   render() {
      return (
         <div className='books-container'>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('kindergartenIndex')}>
                  <i className="huge arrow circle left icon back-button"></i>
               </div>
               <h1 className='grade-title'>Kindergarten</h1>
                  <div className='three-books'>
                     {this.props.kindergarten.slice(this.props.kindergartenIndex, this.props.kindergartenIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('kindergartenIndex')}>
                  <i className="huge arrow circle right icon forward-button"></i>
               </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('firstIndex')}>
                  <i className="huge arrow circle left icon back-button"></i>
               </div>
               <h1 className='grade-title'>First Grade</h1>
                  <div className='three-books'>
                     {this.props.first.slice(this.props.firstIndex, this.props.firstIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
                  <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('firstIndex')}>
                     <i className="huge arrow circle right icon forward-button"></i>
                  </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('secondIndex')}>
                  <i className="huge arrow circle left icon back-button"></i>
               </div>
               <h1 className='grade-title'>Second Grade</h1>
                  <div className='three-books'>
                     {this.props.second.slice(this.props.secondIndex, this.props.secondIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
                  <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('secondIndex')}>
                     <i className="huge arrow circle right icon forward-button"></i>
                  </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('thirdIndex')}>
                  <i className="huge arrow circle left icon back-button"></i>
               </div>
               <h1 className='grade-title'>Third Grade</h1>
                  <div className='three-books'>
                     {this.props.third.slice(this.props.thirdIndex, this.props.thirdIndex + 3).map((book) => {
                        return <Book book={book} showBookDetails={this.props.showBookDetails}/>
                     })}
                  </div>
                  <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('thirdIndex')}>
                     <i className="huge arrow circle right icon forward-button"></i>
                  </div>
            </div>
         </div>

      );
   }
}




export default BooksContainer;
