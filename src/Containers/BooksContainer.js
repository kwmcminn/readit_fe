import React, { Component } from 'react';
import Book from '../Component/Book';
import GradeContainer from './GradeContainer';

class BooksContainer extends Component {
   constructor (){
      super()
      this.state = {
         kindergarten: [],
         first: [],
         second: [],
         third: []
      }
   }



   componentDidMount(){
      let kindergarten = this.props.books.filter(book => book.grade.name === 'Kindergarten')
      let firstGrade = this.props.books.filter(book => book.grade.name === 'First')
      let secondGrade = this.props.books.filter(book => book.grade.name === 'Second')
      let thirdGrade = this.props.books.filter(book => book.grade.name === 'Third')
      this.setState({
         kindergarten: kindergarten,
         first: firstGrade,
         second: secondGrade,
         third: thirdGrade
      })
}
   render() {
      return (

         <div className='book-container'>
         {console.log('HII', this.state)}
         <GradeContainer books={this.props.book} className='my-books'/>
         <GradeContainer books={this.state.kindergarten} className='kindergarten'/>
         <GradeContainer books={this.state.first} className='first-grade'/>
         <GradeContainer books={this.state.second} className='second-grade'/>
         <GradeContainer books={this.state.third} className='third-grade'/>

         </div>
      );
   }

}

export default BooksContainer;
