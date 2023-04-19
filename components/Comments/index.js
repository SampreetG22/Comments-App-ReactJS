import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  inputValChange = event => {
    this.setState({name: event.target.value})
  }

  commentChange = event => {
    this.setState({comment: event.target.value})
  }

  toggleLikeBtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      Name: name,
      Comment: comment,
      initialClassName: initialBackgroundColorClassName,
      isLiked: false,
      date: new Date(),
    }
    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  deleteClick = ID => {
    const {commentList} = this.state
    const filteredList = commentList.filter(eachItem => eachItem.id !== ID)
    this.setState({commentList: filteredList})
  }

  render() {
    const {name, comment, commentList} = this.state
    const commentCount = commentList.length
    return (
      <div className="mainContainer">
        <h1 className="commentsHead">Comments</h1>
        <div className="subContainer1">
          <form onSubmit={this.addComment} className="inputFieldsContainer">
            <p className="paraCSS">Say something about 4.0 Technologies</p>
            <input
              onChange={this.inputValChange}
              value={name}
              className="inputBoxCSS"
              placeholder="Your Name"
            />
            <textarea
              onChange={this.commentChange}
              value={comment}
              className="textClass"
              placeholder="Your Comment"
              rows="7"
              cols="40"
            />
            <button className="BtnClass" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="commentImage"
          />
        </div>
        <hr />
        <div className="subContainer2">
          <p className="commentsText">
            <span className="commentsCount">{commentCount} </span>Comments
          </p>
          <ul className="commentList">
            {commentList.map(each => (
              <CommentItem
                key={each.id}
                deleteClick={this.deleteClick}
                toggleLikeBtn={this.toggleLikeBtn}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
