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
         bookShowing: false,
         myBooksIndex: 0,
         kindergartenIndex: 0,
         firstIndex: 0,
         secondIndex: 0,
         thirdIndex: 0,
         formShowing: false,
         user_id: ""
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
      console.log('fetching grades');
      let kindergarten0 = this.state.books.filter(book => book.grade.name === 'Kindergarten')
      let firstGrade1 = this.state.books.filter(book => book.grade.name.includes('First'))
      let secondGrade2 = this.state.books.filter(book => book.grade.name.includes('Second'))
      let thirdGrade3 = this.state.books.filter(book => book.grade.name.includes('Third'))
      this.setState({
         kindergarten: kindergarten0,
         first: firstGrade1,
         second: secondGrade2,
         third: thirdGrade3
      }, () => console.log(this.state))
   }

   // Creating a new booko and saving it to the db

   makeNewBook = (paragraph, author, grade, image, title) => {
      fetch(BOOKAPI, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            grade_id: grade,
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


   showBookDetails = () => {
      this.setState({
         bookShowing: true
      })
   }

   showFormDetails = () => {
      this.setState({
         formShowing: true
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
         <div>
            <UserSignIn createUser={this.createUser} />


            <div className='app-container' >
               <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails} />

               {this.state.formShowing ?
                  <NewBookForm makeNewBook={this.makeNewBook} /> :

                  <BooksContainer
                     books={this.state.books}
                     kindergarten={this.state.kindergarten}
                     kindergartenIndex={this.state.kindergartenIndex}
                     first={this.state.first}
                     firstIndex={this.state.firstIndex}
                     second={this.state.second}
                     secondIndex={this.state.secondIndex}
                     third={this.state.third}
                     thirdIndex={this.state.thirdIndex}
                  />}
            </div>
         </div>
      )
   }
}

export default App










