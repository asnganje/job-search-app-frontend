import NavLinks from "./NavLinks"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import { useDashboardContext } from "../pages/DashboardLayout"

const BigSidebar = () => {
  const {showSidebar} = useDashboardContext()
  return(
    <aside className="bg-sidebar-wrapper">
      <div className={!showSidebar?"bg-sidebar-container show-sidebar":"sidebar-container"}>
          <div className="bg-content">
            <header>
              <Link to = "/">
                <Logo />
              </Link>
            </header>
            <NavLinks isBigSidebar className= "bg-nav-links"/>
          </div>
      </div>
    </aside>
  )
}

export default BigSidebar