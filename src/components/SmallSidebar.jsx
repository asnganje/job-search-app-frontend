import { FaTimes } from "react-icons/fa"
import { useDashboardContext } from "../pages/DashboardLayout"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

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
              <NavLinks />
          </div>
      </div>
    </aside>
  )
}

export default SmallSidebar