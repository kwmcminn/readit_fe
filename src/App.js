import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import './index.css';
import MenuExampleEvenlyDivided from './Containers/Menu'
import BooksContainer from './Containers/BooksContainer'
import NewBookForm from './Component/NewBookForm'
import UserSignIn from './Component/UserSignIn';
import EditBook from './Component/EditBook';
const BOOKAPI = `http://localhost:3000/books`
const WORDAPI = `http://localhost:3000/words`

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
         editFormShowing: false,
         displayedBook: null,
         words: [],
         kinWords: [],
         firstWords: [],
         secondWords: [],
         thirdWords: [],
         editBook: [],
         myId: parseInt(localStorage.getItem('user_id'))
         speed: 500,
         displayedSightWords: [],
         userLoggedIn: false
      }
      this.fetchingGrades = this.fetchingGrades.bind(this)
   };

   componentDidMount() {
      fetch(BOOKAPI)
         .then(response => response.json())
         .then(json => {
            this.setState({
               books: json
            }, () => this.grabWords())
         })
   }

   grabWords = () => {
      this.fetchingGrades()
      fetch(WORDAPI)
         .then(response => {
            return response.json()
         })
         .then(json => {
            this.setState({
               words: json
            }, () => this.setWords())
         })
   }

   setWords = () => {
      let kWords = this.state.words.filter(word => word.grade_id === 1)
      let firstWords = this.state.words.filter(word => word.grade_id === 2)
      let secondWords = this.state.words.filter(word => word.grade_id === 3)
      let thirdWords = this.state.words.filter(word => word.grade_id === 4)
      this.setState({
         kinWords: JSON.parse(kWords[0].word),
         firstWords: JSON.parse(firstWords[0].word),
         secondWords: JSON.parse(secondWords[0].word),
         thirdWords: JSON.parse(thirdWords[0].word)
      })
   }

   fetchingGrades() {
      let myBooks0 = this.state.books.filter(book => book.user_id === this.state.myId)
      let kindergarten0 = this.state.books.filter(book => book.grade.name === 'Kindergarten')
      let firstGrade1 = this.state.books.filter(book => book.grade.name.includes('First'))
      let secondGrade2 = this.state.books.filter(book => book.grade.name.includes('Second'))
      let thirdGrade3 = this.state.books.filter(book => book.grade.name.includes('Third'))
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
         let newPoem = json
         this.setState({
            myBooks: [...this.state.myBooks, newPoem]
         })
      }).then(this.setState({
         formShowing: false
      }))
   }

   toggleFormShowing = () => {
      this.setState({
         formShowing: false,
         bookShowing: false
      })
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
            user_id: newid,
            userLoggedIn: true
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
            this.deleteBook(id)
         })
   }

   deleteBook = (id) => {
      let newBooks = this.state.myBooks.filter((book) => book.id !== id)
      this.setState({
         myBooks: newBooks
      })
   }

   handleUpdate = (book) => {
      console.log("this is the book", book)
      fetch(`http://localhost:3000/books/${book.id}`,
         {
            method: 'PUT',
            body: JSON.stringify({ book: book }),
            headers: {
               'Content-Type': 'application/json'
            }
         }).then((response) => {
            this.updateBook(book)
         })
   }

   updateBook = (newBook) => {
      this.componentDidMount()
      let newbooks = this.state.books.filter((book) => book.id === newBook.id)
      this.setState({
         myBooks: newbooks,
         editFormShowing: false,
         formShowing: false
      })
   }

   showBookDetails = book => {
      let words;
      let regexp;
      let html;
      let product;
      let sightWords
      if (book.grade_id === 1) {
         words = this.state.kinWords
      } else if (book.grade_id === 2) {
         words = this.state.firstWords
      } else if (book.grade_id === 3) {
         words = this.state.secondWords
      } else if (book.grade_id === 4) {
         words = this.state.thirdWords
      }
      sightWords = this.getSightWords(words, book.paragraph)
      product = book.paragraph
      this.speak(product)
      regexp = new RegExp(`\\b(${words.join('|')})\\b`, 'gi');
      html = product.replace(regexp, '<span class="highlight">$&</span>')
      this.setState({
         bookShowing: true,
         formShowing: false,
         displayedBook: html,
         displayedSightWords: sightWords
      })
   }

   getSightWords = (sightWords, paragraph) => {
      let paraArray = paragraph.split(' ')
      let paragraphSightWords = []
      for (let i = 0; i < paraArray.length; i++) {
         if (sightWords.includes(paraArray[i])) {
            paragraphSightWords.push(paraArray[i])
         }
      }
      let uniqSightWords = [...new Set(paragraphSightWords)]
      return uniqSightWords
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

   increaseSpeed = () => {
      this.setState({
         speed: this.state.speed * .8
      })
   }

   decreaseSpeed = () => {
      this.setState({
         speed: this.state.speed * 1.2
      })
   }

   handleLogOutClick = () => {
      localStorage.clear();
      this.setState({
         formShowing: false,
         bookShowing: false,
         userLoggedIn: false
      })
   }

   speak = (message) => {
      let msg = new SpeechSynthesisUtterance(message)
      let voices = window.speechSynthesis.getVoices()
      msg.voice = voices[0]
      msg.rate = .99;
      window.speechSynthesis.speak(msg)
   }

   showEdit = (book) => {
      this.setState({
         editFormShowing: true,
         editBook: book
      })

   }

   render() {

      let currentDisplay;
      if (localStorage.length === 0) {
         currentDisplay = <div className='app-container login-background'>
            <UserSignIn createUser={this.createUser} />
         </div>
      }
      else if (this.state.formShowing && this.state.bookShowing === false) {
         currentDisplay = <div className='app-container'>
            <MenuExampleEvenlyDivided handleLogOutClick= {this.handleLogOutClick} toggleFormShowing={this.toggleFormShowing} showFormDetails={this.showFormDetails} />
            <div className='form-container'>
               <NewBookForm makeNewBook={this.makeNewBook} />
            </div>
         </div>
      }
      else if (this.state.formShowing === false && this.state.bookShowing) {
         currentDisplay = <div className='app-container cool-background'>
            <MenuExampleEvenlyDivided handleLogOutClick= {this.handleLogOutClick} showFormDetails={this.showFormDetails} toggleFormShowing={this.toggleFormShowing} />
            <div className='paragraph-container'>
               <span>Site Words</span>
               <div className='speed-container'>
                  <img id='bird-picture' src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/Large_Blue_Bird_PNG_Cartoon_Clipart.png?m=1434276645" />
                  <button class='increase-speed' onClick={this.increaseSpeed}>Increase</button>
                  <button class='decrease-speed' onClick={this.decreaseSpeed}>Decrease</button>
               </div>
               <div className='paragraph-show-div'>
                  <div className='marquee'>
                     <span id='scrolling-paragraph' style={{ animation: `scroll-up ${this.state.speed}s linear infinite` }} >{ReactHtmlParser(this.state.displayedBook)}</span>
                  </div>
               </div>
            </div>
         </div>

      }
      else if (this.state.formShowing === false && this.state.bookShowing === false && this.state.editFormShowing) {
         currentDisplay = <div className='app-container'>
            <MenuExampleEvenlyDivided toggleFormShowing={this.toggleFormShowing} showFormDetails={this.showFormDetails} />
            <div className='form-container'>
               <EditBook book={this.state.editBook} handleUpdate={this.handleUpdate} />

            </div>
         </div>
      }
      else if (this.state.formShowing === false && this.state.bookShowing === false) {
         currentDisplay =
            <div className='app-container'>
               <MenuExampleEvenlyDivided handleLogOutClick= {this.handleLogOutClick} showFormDetails={this.showFormDetails} currentDisplay={currentDisplay} />
               <BooksContainer
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
                  showEdit={this.showEdit}
               />
            </div>
      }

      return (
         <div>
            {currentDisplay}
         </div>
      )
   }
}

export default App
