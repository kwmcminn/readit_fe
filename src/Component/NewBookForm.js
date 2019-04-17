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
  canBeSubmitted() {
    const { title, paragraph, image } = this.state;
    return (
      title != "" && paragraph != "" && image != ""
    );
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    this.props.makeNewBook(this.state.paragraph, this.state.author, this.state.grade_id, this.state.image, this.state.title)
  }


  render() {

    const isEnabled = this.canBeSubmitted();
    return (

      <div className="book-form" >

        <form className="ui equal width form" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
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
              <option value="1">Kindergarten</option>
              <option value="2">First</option>
              <option value="3">Second</option>
              <option value="4">Third</option>
            </select>

          </div>

          <div className="field">
            <label>Poem</label>
            <textarea name="paragraph" type='textarea' placeholder="Write your Poem" ></textarea>
          </div>

          <button className="ui submit button" disabled={!isEnabled}>Submit</button>

        </form >
      </div >

    );
  }
}

export default NewBookForm;

