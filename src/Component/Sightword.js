import React from 'react';

const Sightword = props => {
   return (
         <div>
            {props.words.map(word => <li>{word.toUpperCase()}</li>)}
         </div>
   )
}
export default Sightword;
