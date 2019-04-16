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
    return (
      <div className="sign-in">

        <form className="ui large form" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)} >
          <div className="field">
            Username: <input name="username" type='text' placeholder="username" />
          </div>
          <input className="ui submit button" type='submit' value="Submit Username" />
        </form>
      </div >
    );
  }
}
export default UserSignIn
