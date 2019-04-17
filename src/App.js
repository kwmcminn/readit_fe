import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import MenuExampleEvenlyDivided from './Containers/Menu'
import BooksContainer from './Containers/BooksContainer'
import NewBookForm from './Component/NewBookForm'
import UserSignIn from './Component/UserSignIn';
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
         displayedBook: null,
         words: [],
         kinWords: [],
         firstWords: [],
         secondWords: [],
         thirdWords: [],
         speed: 75,
         displayedSightWords: []
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
      console.log("what are words", this.state.words)
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
            this.deleteBook(id)
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
            this.updateBook(book)
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
      } else if (book.grade_id === 3) {
         words = this.state.thirdWords
      }
      sightWords = this.getSightWords(words, book.paragraph)
      product = book.paragraph
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
      for(let i=0; i < paraArray.length; i++){
         if (sightWords.includes(paraArray[i])){
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

   render() {

      let currentDisplay;
      if(this.state.user_id === ""){
         currentDisplay =  <div className='app-container login-background'>
                              <UserSignIn createUser={this.createUser}/>
                           </div>
      }
      else if (this.state.formShowing && this.state.bookShowing === false) {
         currentDisplay = <div className='app-container'>
                           <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails} />
                           <NewBookForm makeNewBook={this.makeNewBook} />
                           </div>
      }
      else if (this.state.formShowing === false && this.state.bookShowing) {
         currentDisplay =<div className='app-container'>
                           <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails} />
                           <div className='paragraph-container'>
                              <button class='increase-speed' onClick={this.increaseSpeed}>Increase</button>
                              <div className='paragraph-show-div'>
                                 <div className='marquee'>
                                    <span id='scrolling-paragraph' style={{animation: `scroll-up ${this.state.speed}s linear infinite`}} >{ReactHtmlParser(this.state.displayedBook)}</span>
                                 </div>
                              </div>
                              <button class='decrease-speed' onClick={this.decreaseSpeed}>Decrease</button>
                           </div>
                     </div>

      }
      else {
         currentDisplay =
                           <div className='app-container'>
                              <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails} />
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
                                       handleUpdate={this.handleUpdate}
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
