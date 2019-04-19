import React, { Component } from 'react';

class UserSignIn extends Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    return (
      <div className="sign-in">
        <h1 id='signin-logo'>Poems4Kids</h1>
        <form id='signin-form' className="ui large form" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)} >
          <div className="field">
            <input id='username-field' name="username" type='text' placeholder="Username" />
          </div>
          <input type='submit' value="Submit" />
        </form>
      </div >
    );
  }
}
export default UserSignIn
