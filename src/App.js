import React, { Component } from 'react';
import './App.css';
import BooksContainer from './Containers/BooksContainer'
const BOOKAPI = `http://localhost:3000/books`
class App extends Component {
   constructor() {
      super()
      this.state = {
         books: [],
         kindergarten: [],
         first: [],
         second: [],
         third: []
      }
      this.grabBooks = this.grabBooks.bind(this)
      this.fetchingGrades = this.fetchingGrades.bind(this)
   };

   componentDidMount() {
      this.grabBooks()
   }

   grabBooks() {
      fetch(BOOKAPI)
         .then(response => response.json())
         .then(json => {
            this.setState({
               books: json
            }, () => this.fetchingGrades())
         })
   }

   fetchingGrades() {
      let kindergarten0 = this.state.books.filter(book => book.grade.name === 'Kindergarten')
      let firstGrade1 = this.state.books.filter(book => book.grade.name.includes('First'))
      let secondGrade2 = this.state.books.filter(book => book.grade.name.includes('Second'))
      let thirdGrade3 = this.state.books.filter(book => book.grade.name.includes('Third'))
      this.setState({
         kindergarten: kindergarten0,
         first: firstGrade1,
         second: secondGrade2,
         third: thirdGrade3
      })
   }

   render() {
      return (
         <div className='app-container' >
            <BooksContainer books={this.state.books} kindergarten={this.state.kindergarten} first={this.state.first} second={this.state.second} third={this.state.third} />
         </div>
      )
   }


}

export default App;
