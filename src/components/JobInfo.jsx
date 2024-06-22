const JobInfo = ({icon, text}) => {
  return <div className="job-info-wrapper">
            <span className="job-icon">{icon}</span>
            <span className="job-text">{text}</span>
        </div>
}

export default JobInfo;