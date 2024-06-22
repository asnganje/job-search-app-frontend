import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Profile = () => {
  return(
    <div>
          <form>
          <h4>User Profile</h4>
            <FormRow type="text" name="name" placeHolder="Nganje"/>
            <FormRow type="text" labelText="Last Name" placeHolder="Abdulrahman"/>
            <FormRow type="text" name="Location" placeHolder="Kenya"/>
            <FormRow type="email" name="email" placeHolder="asn@gmail.com"/>
          <button style={{marginTop: '2rem'}} type="submit" className="btn btn-block">Update</button>
      </form>
    </div>
  )
}

export default Profile;