import React, { Component } from 'react';
import './App.css';
import MenuExampleEvenlyDivided from './Containers/Menu'
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
         third: [],
         bookShowing: false,
         myBooksIndex: 0,
         kindergartenIndex: 0,
         firstIndex: 0,
         secondIndex: 0,
         thirdIndex: 0
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

   showBookDetails = () => {
      this.setState({
         bookShowing: true
      })
   }


   nextBooks = () => {
      this.setState({
         index: this.state.index + 1
      })
   }

   lastBooks = () => {
      this.setState({
         index: this.state.index - 1
      })
   }

   render() {
      return (
         <div className='app-container' >
            <MenuExampleEvenlyDivided />
            <div className='books-container'>
               <div className='grade-container'></div>
               <div className='grade-title'></div>
               <div className='single-book-container'>
                  <div className='single-book'>
                     <h4>Title</h4>
                     <img src="https://carwad.net/sites/default/files/cute-balloon-cliparts-125087-3969158.jpg" />
                     <h5>Author</h5>
                  </div>
               </div>
               <div className='grade-container'></div>
               <div className='grade-container'></div>
               <div className='grade-container'></div>
               <div className='grade-container'></div>
            </div>
         </div>
      )
   }
}

export default App