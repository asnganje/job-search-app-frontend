import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";
const Register = () => {
  return(
    <section className="form-wrapper">
      <form className="form">
          <Logo className = "logo"/>
          <h4>Register</h4>
            <FormRow type="text" name="name"/>
            <FormRow type="text" labelText="Last Name"/>
            <FormRow type="text" name="Location"/>
            <FormRow type="email" name="email"/>
            <FormRow type="password" name="password"/>
          <button type="submit" className="btn btn-block">submit</button>
          <p>Already a member?
            <Link to="/login" className="member-btn">Login</Link>
          </p>
      </form>
    </section>
  )
}

export default Register;