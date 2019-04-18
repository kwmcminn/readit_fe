// <span id='scrolling-paragraph' style={{ animation: `scroll-up ${this.state.speed}s linear infinite` }} >{console.log(ReactHtmlParser(this.state.displayedBook)[0])}</span>
import React, { Component } from 'react';

class Paragraph extends Component {

   render() {
      let newWord;

      return (
         <span id='scrolling-paragraph' style={{ animation: `scroll-up ${this.props.speed}s linear infinite`}}>
            {this.props.words.map((word) => {
               return word.startsWith('>') ? <span onClick={() => this.props.sayWord(word.substring(1))} className='highlight'>{' ' + word.substring(1)}</span> : <span onClick={() => this.props.sayWord(word)}>{' ' + word}</span>
            })}
         </span>
      );
   }
}




export default Paragraph;
