import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, deleteClick, toggleLikeBtn} = props
  const {id, Name, Comment, date, initialClassName, isLiked} = details
  const time = formatDistanceToNow(date)
  const deleteBtnClicked = () => {
    deleteClick(id)
  }

  const toggleBtnStyle = () => {
    toggleLikeBtn(id)
  }
  const BlueLike =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const NormalLike =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  let likeUrl
  let likeTextCSS

  if (isLiked === true) {
    likeUrl = BlueLike
    likeTextCSS = 'BlueText'
  } else {
    likeUrl = NormalLike
    likeTextCSS = 'BlackText'
  }

  return (
    <li className="indCommentEl">
      <div className="initialNameTimeContainer">
        <p style={{color: 'white'}} className={initialClassName}>
          {Name[0].toUpperCase()}
        </p>
        <div className="nameDateCommentContainer">
          <div className="nameTime">
            <p className="fullName">{Name}</p>
            <p className="timeCSS">{time} ago</p>
          </div>
          <p className="commentText">{Comment}</p>
        </div>
      </div>
      <div className="likeAndDelete">
        <div>
          <button type="button" onClick={toggleBtnStyle} className="likeBtn">
            <img src={likeUrl} alt="like" className="likeImage" />
            <span className={likeTextCSS}>Like</span>
          </button>
        </div>
        <button
          type="button"
          onClick={deleteBtnClicked}
          className="deleteBtn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteBtn"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

// Check time functionality

// Add like and delete functionality

export default CommentItem
