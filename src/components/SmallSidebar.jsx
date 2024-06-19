import { FaTimes } from "react-icons/fa"
import { useDashboardContext } from "../pages/DashboardLayout"
import Logo from "./Logo"
import { links } from "../utils/links"
import { NavLink } from "react-router-dom"

const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useDashboardContext()
  
  return(
    <aside className="s-sidebar-wrapper">
      <div className={showSidebar?"sidebar-container show-sidebar":"sidebar-container"}>
          <div className="content">
              <button type="button" className="close-btn" onClick={toggleSidebar}>
                <FaTimes />
              </button>
              <header>
                <Logo className = "logo"/>
              </header>
              <div className="nav-links">
                {
                  links.map((link)=> {
                    const {path, text, icon} = link
                    return(
                      <NavLink className="nav-link" to={path} key={text} onClick={toggleSidebar} end>
                        <span className="icon"> {icon}</span>
                        {text}
                      </NavLink>
                    )
                  })
                }
              </div>
          </div>
      </div>
    </aside>
  )
}

export default SmallSidebar