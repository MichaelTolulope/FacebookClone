import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faHouse, faList, faSearch, faStore, faTv, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const navigations = [
        { name: "Home", logo: <FontAwesomeIcon className="icon" icon={faHouse} />, href: "/" },
        { name: "Reels", logo: <FontAwesomeIcon className="icon" icon={faTv} />, href: "/reels" },
        { name: "MarketPlace", logo: <FontAwesomeIcon className="icon" icon={faStore} />, href: "/marketplace" },
        { name: "Groups", logo: <FontAwesomeIcon className="icon" icon={faUserGroup} />, href: "/groups" },
        { name: "Games", logo: <FontAwesomeIcon className="icon " icon={faGamepad} />, href: "/games" }


    ]

    const quickLinks = [
        {

            name: "menu", icon: <FontAwesomeIcon className="icon" icon={faList} />
        },
        {
            name: "messages", icon: <FontAwesomeIcon className="icon" icon={faFacebookMessenger} />
        },
        {
            name: "notifications", icon: <FontAwesomeIcon className="icon" icon={faBell} />
        }

    ]
    return (
        <div className="nav-container">
            <div className="left">
                <FontAwesomeIcon icon={faFacebook} />
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Search Facebook" spellCheck="false" />
                </div>
            </div>
            <div className="center">
                {navigations.map((item) => {
                    return (
                        <NavLink key={item.name} className={({ isActive }) => { return (!isActive ? ".active" : "nav-links") + " iconContainer" }} to={item.href}>{item.logo}</NavLink>
                    )
                })}
                

            </div>
            <div className="right">
                {quickLinks.map((item) => {
                    return (
                        <div key={item.name} className="quick-links-icons-container">
                            {item.icon}
                        </div>
                    )
                })}
                <div className="profile-pic"></div>
            </div>
        </div>
    )
}
export default NavBar