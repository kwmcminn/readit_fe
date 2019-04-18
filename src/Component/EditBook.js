import React, { Component } from 'react';


class EditBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.book.title,
      paragraph: this.props.book.paragraph,
      author: this.props.book.author,
      grade_id: this.props.book.grade_id,
      image: this.props.book.image,
      id: this.props.book.id
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
    event.preventDefault()
    this.props.handleUpdate(this.state)
  }


  render() {

    const isEnabled = this.canBeSubmitted();
    return (

      <div className="book-form" >

        <form className="ui equal width form" onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.handleSubmit(event)}>
          <div className="field">
            <label>Poem Title:
            <input className='input-field' name="title" type='text' placeholder="Poem Title" value={this.state.title} />
            </label>
          </div>

          <div className="field">
            <label>Poem Image:
            <input className='input-field' name="image" type='text' placeholder="Paste your image URL" value={this.state.image} />
            </label>
          </div>

          <div className="field">
            <label>Poem Author:
             <input className='input-field' name="author" type='text' placeholder="Poem Author" value={this.state.author} />
            </label>
          </div>

          <div className="field">
            <label>Grade</label>
            <select name="grade_id" className="ui fluid dropdown" >
              <option value="">Grade</option>
              <option value="1">Kindergarten</option>
              <option value="2">First</option>
              <option value="3">Second</option>
              <option value="4">Third</option>
            </select>

          </div>

          <div className="field">
            <label>Poem</label>
            <textarea name="paragraph" type='textarea' placeholder="Write your Poem" value={this.state.paragraph}></textarea>
          </div>

          <button className="ui submit button" disabled={!isEnabled}>Submit</button>

        </form >
      </div >

    );
  }
}

export default EditBook;
