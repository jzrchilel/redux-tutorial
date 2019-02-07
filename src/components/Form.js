import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addArticle } from '../js/actions'

class Form extends Component {
  state = {
    title: ''
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = uuidv1()
    this.props.addArticle({ title: this.state.title, id})
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
})

export default connect(null, mapDispatchToProps)(Form)
