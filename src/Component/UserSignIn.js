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
    console.log("about to post", this.state)
    this.props.createUser(this.state)
  }

  render() {
     // <input id='signin-submit-button' className="ui submit button" type='submit' value="Submit Username" />
    return (
      <div className="sign-in">
        <h1 id='signin-logo'>Poems4Kids</h1>
        <form id='signin-form' className="ui large form" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)} >

          <div className="field">
            <input id='username-field' name="username" type='text' placeholder="Username" />
          </div>
        </form>
      </div >
    );
  }
}
export default UserSignIn
