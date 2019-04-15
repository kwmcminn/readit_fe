import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      this.props.showFormDetails())

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='nav-bar' fluid widths={3}>
        <Menu.Item name='New Poem' active={activeItem === 'New Poem'} onClick={this.handleItemClick} />
        <Menu.Item name='sell' active={activeItem === 'sell'} onClick={this.handleItemClick} />
        <Menu.Item name='rent' active={activeItem === 'rent'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
