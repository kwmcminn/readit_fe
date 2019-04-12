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
             console.log(json[0].paragraph)
         })
   }

  render() {
    return (
      <div>
         <BooksContainer books={this.state.books}/>
      </div>

    );
  }
}

export default App;
