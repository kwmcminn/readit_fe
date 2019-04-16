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
    this.props.makeNewBook(this.state.paragraph, this.state.author, this.state.grade, this.state.image, this.state.title)
  }


  render() {
    return (
      <div>

        <form class="ui equal width form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div class="field">
            <label>Poem Title:
            <input name="title" type='text' placeholder="Poem Title" />
            </label>
          </div>

          <div class="field">
            <label>Poem Image:
            <input name="image" type='text' placeholder="Paste your image URL" />
            </label>
          </div>

          <div class="field">
            <label>Poem Author:
             <input name="author" type='text' placeholder="Poem Author" />
            </label>
          </div>

          <div class="field">
            <label>Grade</label>
            <select name="grade" class="ui fluid dropdown">
              <option value="">Grade</option>
              <option value="0">Kindergarten</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
            </select>
          </div>

          <div class="field">
            <label>Poem</label>
            <textarea name="paragraph" type='textarea' placeholder="Write your Poem" ></textarea>
          </div>

          <div class="ui submit button">Submit</div>
        </form >
      </div >




    );
  }
}

export default NewBookForm;

