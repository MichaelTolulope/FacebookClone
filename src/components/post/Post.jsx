import "./Post.css"
import Container from "../hoc/Container"
import { user, post } from "../../data"
import {  faComment, faListDots, faMessage, faShare, faThumbsUp, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Post = () => {
  return (
    <Container>
      <div className="post-head">
        <div className="top-part">
          <div className="profile">
            <div className="profile-pic"><img src={user.profilePic} alt="post" /></div>
            <div className="profile-info">
              <p>{user.userName}</p>
              <p className="post-date">1d</p>
            </div>
          </div>
          <div className="actions">
            <FontAwesomeIcon icon={faListDots}/>
            <FontAwesomeIcon icon={faX}/>
          </div>
        </div>
        <div className="bottom-part">
        <p>{post.writeUp}</p>
        </div>
      </div>
      <div className="post-pic"><img src={post.image} alt="" /></div>
      
      <div className="post-info">
        <div className="reaction-info">
          <FontAwesomeIcon icon={faThumbsUp}/>
          <p>20k</p>
        </div>
        <div className="post-actions-info">
          <p>23 comments</p>
          <p>300 shares</p>
        </div>
      </div>
      <hr/>
      <div className="post-actions">
        <div className="like actions">
          <FontAwesomeIcon icon={faThumbsUp}/>
          <p>Like</p>
        </div>
        <div className="comment actions">
          <FontAwesomeIcon icon={faMessage}/>
          <p>comment</p>
        </div>
        <div className="share actions">
          <FontAwesomeIcon icon={faShare}/>
          <p>share</p>
        </div>
      </div>
    </Container>
  )
}
export default Post