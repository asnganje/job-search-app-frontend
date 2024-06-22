import {FaLocationArrow, FaCalendarAlt, FaBriefcase} from 'react-icons/fa'
import JobInfo from "./JobInfo";

const Job = ({id, position, company, location, date, type, status,removeJob})=> {
  console.log(location);
  return <article className="job-wrapper">
            <header className='job-header'>
              <div className="main-icon">
                {company.charAt(0)}
              </div>
              <div className="info">
                <h5>{position}</h5>
                <p>{company}</p>
              </div>
            </header>
            <div className="content">
              <div className="content-center">
                <JobInfo icon= {<FaLocationArrow />} text = {location}/>
                <JobInfo icon= {<FaCalendarAlt />} text = {date}/>
                <JobInfo icon= {<FaBriefcase />} text = {type}/>
                <div className={`status ${status}`}>{status}</div>
                <footer className='actions'>
                  <button className='btn edit-btn'>Edit</button>
                  <button className='btn delete-btn' onClick={()=> removeJob(id)}>Delete</button>
                </footer>
              </div>
            </div>
        </article>
}

export default Job;