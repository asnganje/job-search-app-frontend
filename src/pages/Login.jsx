import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Login = () => {
  return(
    <section className="form-wrapper">
      <form className="form">
        <Link to="/">
            <Logo className = "logo"/>
        </Link>
        <h4>Login</h4>
        <FormRow type="email" name="email"/>
        <FormRow type="password" name="password"/>
        <button type="submit" className="btn btn-block">submit</button>
          <p>Not a member yet?
            <Link to="/register" className="member-btn">Register</Link>
          </p>
      </form>
    </section>
  )
}

export default Login;