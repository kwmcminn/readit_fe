import React, { Component } from 'react';

class CreateBook
  extends Component {
  constructor() {
    super()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }


  render() {
    return (
      <div>
        <h1>Create Your Own Poem!</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} >

          <p>
            <label>Poem Title:
            <input name="title" type='text' placeholder="Poem Title" />
            </label>
          </p>

          <p>
            <label>Poem Image:
            <input name="image" type='text' placeholder="Paste your image URL" />
            </label>
          </p>


          <p>
            <label>Poem Author:

              <input name="author" type='text' placeholder="Poem Author" />
            </label>
          </p>


          <label>Poem:
            <p>
              <textarea name="paragraph" type='textarea' placeholder="Write your Poem" />
            </p>
          </label>


          <p>
            <input id='form-submit' type='submit' value='Submit' />
          </p>

        </form>
      </div >
    );
  }
}

export default CreateBook;
