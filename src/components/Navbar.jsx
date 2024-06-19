import {FaAlignLeft } from "react-icons/fa"
import Logo from './Logo'
import { useDashboardContext } from "../pages/DashboardLayout"

const Navbar = () => {
  const {toggleSidebar} = useDashboardContext()
  return(
    <nav className="navbar-wrapper">
      <div className="nav-center">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaAlignLeft />
        </button>
      <div className="logo-control">
        <Logo className="logo"/>
        <h4 className="logo-text">dashboard</h4>
      </div>
      <div className="btn-container">toggle/logout</div>
      </div>
    </nav>
  )
}

export default Navbar