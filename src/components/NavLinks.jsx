import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom"
import { links } from "../utils/links"

const NavLinks = ({isBigSidebar}) => {
  const {toggleSidebar} = useDashboardContext()
  return(
    <div className="nav-links">
    {
      links.map((link)=> {
        const {path, text, icon} = link
        return(
          <NavLink className="nav-link bg-nav-link" to={path} key={text} onClick={isBigSidebar?null:toggleSidebar} end>
          <span className="icon"> {icon}</span>
          {text}
        </NavLink>
        )
      })
    }
  </div>
  )
}

export default NavLinks;