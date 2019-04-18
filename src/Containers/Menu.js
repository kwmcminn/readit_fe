import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handlePoemClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      this.props.showFormDetails())

  handleHomeClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      this.props.toggleFormShowing())


  render() {

    return (
      <div className='nav-bar' >
         <Link className='about-us-link' to='/aboutus'>
            <div className='nav-item' >
               About Us
            </div>
         </Link>
         <Link className='home-link' to='/'>
            <div className='nav-item' >
               Home
            </div>
         </Link>
         <div className='nothing'>
               <Link ></Link>
               </div>
         <Link className='write-poem-link' onClick={() => this.handlePoemClick()}>
            <div className='nav-item'>
               Create a Poem
            </div>
         </Link>
      </div>
   )
  }
}
