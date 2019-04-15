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
         bookShowing: false,
         myBooksIndex: 0,
         kindergartenIndex: 0,
         firstIndex: 0,
         secondIndex: 0,
         thirdIndex: 0,
         formShowing: false
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
         <div className='app-container' >
            <MenuExampleEvenlyDivided showFormDetails={this.showFormDetails}/>

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
