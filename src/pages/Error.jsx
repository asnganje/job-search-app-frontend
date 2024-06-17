import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError()
  console.log(error);
  return(
    <div>
      <h2>Error page</h2>
      <Link to = "/">Back home</Link>
    </div>
  )
}

export default Error;