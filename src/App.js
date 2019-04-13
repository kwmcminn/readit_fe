import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavContainer from './Containers/NavContainer'

const BOOKAPI = `http://localhost:3000/books`
class App extends Component {
   constructor() {
      super()
      this.state = {
         books: []
      }
   };

   componentDidMount() {
      this.grabBooks()
         .then(books => console.log(this.state.books))
   }

   grabBooks = () => {
      return fetch(BOOKAPI)
         .then(response => response.json())
         .then(json => {
            this.setState({
               books: json
            })
         })
   }

   render() {
      return (
         <NavContainer books={this.state.books} />
      )
   }

}


export default App;

