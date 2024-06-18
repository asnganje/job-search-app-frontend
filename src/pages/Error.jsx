import { useRouteError, Link } from "react-router-dom";
import notFound from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return(<section className="error-wrapper">
      <div>
        <img src={notFound} alt="not-found" className="error-img"/>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to='/dashboard' className="a">back home</Link>
      </div>
    </section>
    )
  }
  return(
    <section className="error-wrapper">
      <div>
        <h3>Something went wrong</h3>
      </div>
    </section>
  )
}

export default Error;