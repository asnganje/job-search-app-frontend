import {FaAlignLeft } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
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
        <NavLink to="/"> 
          <Logo className="logo"/>
        </NavLink>
        <h4 className="logo-text">dashboard</h4>
      </div>
      <Link to="/" className="btn">toggle-logout</Link>
      </div>
    </nav>
  )
}

export default Navbar