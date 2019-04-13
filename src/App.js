import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BooksContainer from './Containers/BooksContainer'
const BOOKAPI = `http://localhost:3000/books`
class App extends Component {
   constructor (){
      super()
      this.state = {
         books: []
      }
   }

   componentDidMount(){
        fetch(BOOKAPI)
          .then(response => response.json())
          .then(json => {
             this.setState({
                books: json
             })
         })
   }

   renderBooks = () => {
      return this.state.books.length > 0 ? <BooksContainer books={this.state.books}/> : null
   }

  render() {
    return (
      <div className='app-container'>
         <h1> HI </h1>
         {this.renderBooks()}
      </div>

    );
  }
}

export default App;
