import React, { Component } from 'react'

export default class MenuExampleEvenlyDivided extends Component {
   state = {}

   handlePoemClick = () => {
      this.props.showFormDetails()
   }

   handleHomeClick = () => {

      this.props.toggleFormShowing()
   }


   render() {

      return (
         <div className='nav-bar' >

            <div onClick={() => this.handleHomeClick()} className='nav-item' >
               Home
            </div>

            <div className='nothing nav-item' onClick={() => this.props.handleLogOutClick()}>
                  Logout
            </div>

            <div className='nav-item' onClick={() => this.handlePoemClick()}>
               Create a Poem
            </div>
            

         </div>
      )
   }
}
