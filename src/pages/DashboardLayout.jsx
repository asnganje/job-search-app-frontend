import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = {name: 'abdul'}

  const [getUser, setGetUser] = useState(user)
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }


  const logoutUser = () => {
    const updatedUser = user.name = null    
    setGetUser(updatedUser)
  }

  return(
    <DashboardContext.Provider value={{getUser, showSidebar, toggleSidebar, logoutUser}}>
      <section className="dashboard-wrapper">
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}


export default DashboardLayout;