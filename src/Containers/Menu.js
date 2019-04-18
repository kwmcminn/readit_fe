import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handlePoemClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      this.props.showFormDetails())

  handleHomeClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      this.props.toggleFormShowing())


  render() {
    const { activeItem } = this.state

    return (

      <Menu className='nav-bar' secondary >
        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleHomeClick} />
        <Menu.Item name='Write Your Own Poem' active={activeItem === 'Write Your Own Poem'} onClick={this.handlePoemClick} />
        <Menu.Item
          position='right'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.handleLogOutClick}
        />
        <Menu.Item>
          <Link to='/aboutus'><button>About us</button></Link>
        </Menu.Item>
      </Menu>
    )
  }
}
