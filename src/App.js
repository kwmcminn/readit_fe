import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookContainer from './Containers/BookContainer'
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

  render() {
    return (
      <div>
         <BookContainer books={this.state.books}/>
      </div>

    );
  }
}

export default App;
