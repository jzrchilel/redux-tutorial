import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../js/actions'

class Post extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.remoteArticles.slice(0, 10)
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
