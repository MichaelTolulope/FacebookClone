import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Story from "../Story"
import "./Stories.css"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
const Stories = () => {
  return (
    <div className="wrapper">
    <div className="stories-wrapper">
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <div className="control-arrow">
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
    </div>
    </div>
  )
}
export default Stories