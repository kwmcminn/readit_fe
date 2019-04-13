import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import BooksContainer from '../Containers/BooksContainer'
import NewBookForm from '../Component/NewBookForm'


class NavContainer extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {

    return (
      <Router>
        <div>
          <Navbar color="faded" light>
            <Link to='/'><NavbarBrand className="mr-auto">ReadIt</NavbarBrand></Link>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link activeClassName="active" to="/">Home</Link>{' '}
                </NavItem>
                <NavItem>
                  <Link activeClassName="active" to="/CreateBook">Create a Book</Link>{' '}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={() => <BooksContainer books={this.props.books} />} />
          <Route path="/CreateBook" exact component={() => <NewBookForm />} />
        </div>
      </Router>
    );
  }
}


export default NavContainer;