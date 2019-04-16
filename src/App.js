import React, { Component } from 'react';
import './App.css';
import MenuExampleEvenlyDivided from './Containers/Menu'
import BooksContainer from './Containers/BooksContainer'
import NewBookForm from './Component/NewBookForm'
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
         myBooksIndex: 0,
         kindergartenIndex: 0,
         firstIndex: 0,
         secondIndex: 0,
         thirdIndex: 0,
         bookShowing: false,
         formShowing: false,
         displayedBook: null
      }
      // this.grabBooks = this.grabBooks.bind(this)
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

   makeNewBook = (paragraph, author, grade, image, title) => {
    console.log("in make a new book", paragraph, author, grade, image, title)
    fetch(BOOKAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          grade_id: grade,
          title: title,
          image: image,
          paragraph: paragraph,
          author: author,
          user_id: 1
      })
    }).then(this.setState({
      formShowing: false
    }))
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
      let grade = index.slice(0,-5)
      if (this.state[index] < this.state[grade].length - 1){
         this.setState({[index]: this.state[index] + 1})
      }
   }

   decreaseIndex = (index) => {
      let grade = index.slice(0,-5)
      if (this.state[index] > 0){
         this.setState({[index]: this.state[index] - 1})
      }
   }

   render() {
      let currentDisplay;
      if(this.state.formShowing && this.state.bookShowing === false){
         currentDisplay = <NewBookForm makeNewBook={this.makeNewBook} />
      }
      else if (this.state.formShowing === false && this.state.bookShowing) {

         currentDisplay = <div className='paragraph-container'>
                           <h1 className='paragraph-text'>{JSON.parse(this.state.displayedBook.paragraph)[0]}</h1>
                           </div>
      }
      else{
         currentDisplay = <BooksContainer
            books={this.state.books}
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
            />
      }

      return (
         <div className='app-container'>
            <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails}/>
            {currentDisplay}
         </div>
      )
   }
}

//    <div className='grade-title'></div>
//    <div className='single-book-container'>
//       <div className='single-book'>
//          <h4>Title</h4>
//       </div>
//    </div>
//    <div className='grade-container'></div>
//    <div className='grade-container'></div>
//    <div className='grade-container'></div>
//    <div className='grade-container'></div>

export default App
