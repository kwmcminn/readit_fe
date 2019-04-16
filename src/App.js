import React, { Component } from 'react';
import './App.css';
import MenuExampleEvenlyDivided from './Containers/Menu'
import BooksContainer from './Containers/BooksContainer'
import NewBookForm from './Component/NewBookForm'
import UserSignIn from './Component/UserSignIn';
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
         myBooks: [],
         myBooksIndex: 0,
         kindergartenIndex: 0,
         firstIndex: 0,
         secondIndex: 0,
         thirdIndex: 0,
         user_id: "",
         bookShowing: false,
         formShowing: false,
         displayedBook: null
      }
      this.fetchingGrades = this.fetchingGrades.bind(this)
   };

   componentDidMount() {
      fetch(BOOKAPI)
         .then(response => response.json())
         .then(json => {
            this.setState({
               books: json
            }, () => this.fetchingGrades())
         })
   }

   fetchingGrades() {
      let myId = parseInt(localStorage.getItem('user_id'))
      let myBooks0 = this.state.books.filter(book => book.user_id === myId)
      let kindergarten0 = this.state.books.filter(book => book.grade.name === 'Kindergarten')
      let firstGrade1 = this.state.books.filter(book => book.grade.name.includes('First'))
      let secondGrade2 = this.state.books.filter(book => book.grade.name.includes('Second'))
      let thirdGrade3 = this.state.books.filter(book => book.grade.name.includes('Third'))
      console.log("myId", myId)
      this.setState({
         myBooks: myBooks0,
         kindergarten: kindergarten0,
         first: firstGrade1,
         second: secondGrade2,
         third: thirdGrade3
      })
   }

   // Creating a new book and saving it to the db

   makeNewBook = (paragraph, author, grade, image, title) => {
      let newGrade = parseInt(grade)
      fetch(BOOKAPI, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            grade_id: newGrade,
            title: title,
            image: image,
            paragraph: paragraph,
            author: author,
            user_id: localStorage.getItem('user_id')
         })
      }).then((response) => {
         return response.json();
      }).then((json) => {
         console.log("new Poem Json", json)
         let newPoem = json
         let test = [...this.state.myBooks, newPoem]
         console.log("testing adding mybook", test)
         this.setState({
            myBooks: [...this.state.myBooks, newPoem]
         })
      }).then(this.setState({
         formShowing: false
      }))
   }


   //Creating a new user

   createUser = (data) => {
      fetch(`http://localhost:3000/users`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            username: data.username
         })
      }).then((response) => {
         return response.json();
      }).then((json) => {
         localStorage.setItem('user_id', json.id);
         let newid = localStorage.getItem('user_id')
         this.setState({
            user_id: newid
         })
      });
   }


   handleDelete = (id) => {
      fetch(`http://localhost:3000/books/${id}`,
         {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            }
         }).then((response) => {
            return response.json();
         }).then((json) => {
            this.deleteBook(json.id)
         })
   }

   deleteBook = (id) => {
      let newBooks = this.state.books.filter((book) => book.id !== id)
      this.setState({
         myBooks: newBooks
      })
   }

   handleUpdate(book) {
      fetch(`http://localhost:3000/books/${book.id}`,
         {
            method: 'PUT',
            body: JSON.stringify({ book: book }),
            headers: {
               'Content-Type': 'application/json'
            }
         }).then((response) => {
            return response.json();
         }).then((json) => {
            this.updateBook(json)
         })
   }

   updatebook(book) {
      let newbooks = this.state.myBooks.filter((book) => book.id !== book.id)
      newbooks.push(book)
      this.setState({
         myBooks: newbooks
      })
   }




   showBookDetails = book => {
      console.log(book)
      this.setState({
         bookShowing: true,
         formShowing: false,
         displayedBook: book
      })
   }

   showFormDetails = () => {
      this.setState({
         formShowing: true,
         bookShowing: false
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

   increaseIndex = (index) => {
      let grade = index.slice(0, -5)
      if (this.state[index] < this.state[grade].length - 1) {
         this.setState({ [index]: this.state[index] + 1 })
      }
   }

   decreaseIndex = (index) => {
      if (this.state[index] > 0) {
         this.setState({ [index]: this.state[index] - 1 })
      }
   }

   render() {
      let currentDisplay;
      if (this.state.formShowing && this.state.bookShowing === false) {
         currentDisplay = <NewBookForm makeNewBook={this.makeNewBook} />
      }
      else if (this.state.formShowing === false && this.state.bookShowing) {

         currentDisplay = <div className='paragraph-container'>
            <h1 className='paragraph-text'>{JSON.parse(this.state.displayedBook.paragraph)[0]}</h1>
         </div>
      }
      else {
         currentDisplay = <BooksContainer
            books={this.state.books}
            myBooks={this.state.myBooks}
            myBooksIndex={this.state.myBooksIndex}
            kindergarten={this.state.kindergarten}
            kindergartenIndex={this.state.kindergartenIndex}
            first={this.state.first}
            firstIndex={this.state.firstIndex}
            second={this.state.second}
            secondIndex={this.state.secondIndex}
            third={this.state.third}
            thirdIndex={this.state.thirdIndex}
            increaseIndex={this.increaseIndex}
            decreaseIndex={this.decreaseIndex}
            showBookDetails={this.showBookDetails}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
         />
      }

      return (
         <div className='app-container'>
            <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails} />
            {currentDisplay}
         </div>
      )
   }
}

export default App










