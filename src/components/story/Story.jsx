import StoryContainer from "./StoryContainer"
import "./Story.css"
import {user} from "../../data"

const Story = () => {
  return (
    <StoryContainer>
        <img className="story-image" src={user.profilePic} alt="" />
        <div className="story-profile-pic">
            <img src={user.profilePic} alt="" />
        </div>
          <p className="username">Precious Joy</p>
        
    </StoryContainer>
  )
}
export default Story