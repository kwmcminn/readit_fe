import React, { Component } from 'react';
import Book from '../Component/Book'

class BooksContainer extends Component {


   render() {
      return (
         <div className='books-container'>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('myBooksIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
               <h1 className='grade-title'>My Poems</h1>
               <div className='three-books'>
                  {this.props.myBooks.slice(this.props.myBooksIndex, this.props.myBooksIndex + 3).map((book) => {
                     return <Book book={book} showBookDetails={this.props.showBookDetails} showEdit={this.props.showEdit} handleDelete={this.props.handleDelete} />
                  })}
               </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('myBooksIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('kindergartenIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
               <h1 className='grade-title'>Kindergarten</h1>
               <div className='three-books'>
                  {this.props.kindergarten.slice(this.props.kindergartenIndex, this.props.kindergartenIndex + 3).map((book) => {
                     return <Book book={book} showBookDetails={this.props.showBookDetails} showEdit={this.props.showEdit} handleDelete={this.props.handleDelete} />
                  })}
               </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('kindergartenIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('firstIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
               <h1 className='grade-title'>First Grade</h1>
               <div className='three-books'>
                  {this.props.first.slice(this.props.firstIndex, this.props.firstIndex + 3).map((book) => {
                     return <Book book={book} showBookDetails={this.props.showBookDetails} showEdit={this.props.showEdit} handleDelete={this.props.handleDelete} />
                  })}
               </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('firstIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('secondIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
               <h1 className='grade-title'>Second Grade</h1>
               <div className='three-books'>
                  {this.props.second.slice(this.props.secondIndex, this.props.secondIndex + 3).map((book) => {
                     return <Book book={book} showBookDetails={this.props.showBookDetails} showEdit={this.props.showEdit} handleDelete={this.props.handleDelete} />
                  })}
               </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('secondIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
            </div>
            <div className='grade-container'>
               <div className='arrow-div-backward' onClick={() => this.props.decreaseIndex('thirdIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
               <h1 className='grade-title'>Third Grade</h1>
               <div className='three-books'>
                  {this.props.third.slice(this.props.thirdIndex, this.props.thirdIndex + 3).map((book) => {
                     return <Book book={book} showBookDetails={this.props.showBookDetails} showEdit={this.props.showEdit} handleDelete={this.props.handleDelete} />
                  })}
               </div>
               <div className='arrow-div-forward' onClick={() => this.props.increaseIndex('thirdIndex')}>
                  <img className='cupcake' src='https://appstickers-cdn.appadvice.com/1134045524/818127607/9916794f8de2c754a32d3097f619cc1a-1.png'/>
               </div>
            </div>
         </div>

      );
   }
}




export default BooksContainer;
