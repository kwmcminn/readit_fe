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

        <form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
          <div className="fieldd">
            <label>Poem Title:
            <input className='input-field' name="title" type='text' placeholder="Poem Title" value={this.state.value} />
            </label>
          </div>

          <div className="fieldd">
            <label>Poem Image:
            <input className='input-field' name="image" type='text' placeholder="Paste your image URL" value={this.state.value} />
            </label>
          </div>

          <div >
            <label>Poem Author:
             <input className='input-field' name="author" type='text' placeholder="Poem Author" value={this.state.value} />
            </label>
          </div>

          <div className="fieldd">
            <label>Grade: </label>
            <select name="grade_id" className="ui fluid dropdown" value={this.state.value}>
              <option value="">Grade</option>
              <option value="1">Kindergarten</option>
              <option value="2">First</option>
              <option value="3">Second</option>
              <option value="4">Third</option>
            </select>

          </div>

          <div className="fieldd">
            <label>Poem: </label>
            <textarea className='input-field poem' name="paragraph" type='textarea' placeholder="Write your Poem" value={this.state.value}></textarea>
          </div>

          <button className="ui submit button" disabled={!isEnabled}>Submit</button>

        </form >
      </div >

    );
  }
}

export default NewBookForm;
