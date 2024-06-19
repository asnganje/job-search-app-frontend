import {Link, NavLink } from "react-router-dom";
import { Logo } from "../components";
import main from '../assets/main.svg'

const Landing = () => {
  return(
    <section className="landing-wrapper">
      <nav className="landing-nav">
          <NavLink to="/">
              <Logo className="logo" />
          </NavLink>
          <div>
              <Link to='/dashboard' className="btn">Go to Dashboard</Link>
          </div>
      </nav>
      <div className="landing-container page">
        <div className="info">
          <h1>Job <span>Tracking</span> App</h1>
          <p>
          Introducing our innovative job search app, your ultimate 
          career companion designed to streamline and enhance your job 
          hunting experience. Whether you're a fresh graduate entering 
          the workforce or a seasoned professional seeking new 
          opportunities, our app offers personalized job recommendations, 
          real-time notifications, and advanced search filters to help 
          you find the perfect match. Seamlessly connect with potential 
          employers, track your applications, and access valuable career 
          resources, all within a user-friendly interface. Empower your 
          job search journey with our cutting-edge technology and take the 
          next step towards your dream job with confidence and ease.
          </p>
              <div>
                <Link to='/register' className="btn register-link">Register</Link>
                <Link to='/login' className="btn">Login</Link>
              </div>
        </div>
        <img src={main} alt="job hunt" className="main-img"/>
      </div>
    </section>
  )
}

export default Landing;