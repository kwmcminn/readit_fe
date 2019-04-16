import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      paragraph: "",
      author: "",
      grade_id: "",
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
    console.log("new book props", this.state.grade_id)
    this.props.makeNewBook(this.state.paragraph, this.state.author, this.state.grade_id, this.state.image, this.state.title)
  }


  render() {
    return (
      <div>

        <form className="ui equal width form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Poem Title:
            <input name="title" type='text' placeholder="Poem Title" />
            </label>
          </div>

          <div className="field">
            <label>Poem Image:
            <input name="image" type='text' placeholder="Paste your image URL" />
            </label>
          </div>

          <div className="field">
            <label>Poem Author:
             <input name="author" type='text' placeholder="Poem Author" />
            </label>
          </div>

          <div className="field">
            <label>Grade</label>
            <select name="grade_id" className="ui fluid dropdown">
              <option value="">Grade</option>
              <option value="0">Kindergarten</option>
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
            </select>
          </div>

          <div className="field">
            <label>Poem</label>
            <textarea name="paragraph" type='textarea' placeholder="Write your Poem" ></textarea>
          </div>

          <input className="ui submit button" type='submit' value="Submit" />
        </form >
      </div >




    );
  }
}

export default NewBookForm;

