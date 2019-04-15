import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      paragraph: "",
      author: "",
      grade: "",
      image: ""
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
    this.props.makeNewBook(this.state.paragraph, this.state.author, this.state.grade, this.state.image, this.state.title)



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
            <label>Poem Grade Level:
            <input name="grade" type='text' placeholder="What Grade Level" />
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

export default NewBookForm;
