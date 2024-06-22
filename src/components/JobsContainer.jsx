import { useState } from "react";
import Job from "./Job";


const jobs = [
              {
                id: 1,
                position: 'Marketing manager',
                company: 'Safaricom',
                location: 'Kenya',
                type: 'Remote',
                status: 'Declined',
                date: '24-5-2024'
              },

              {
                id: 2,
                position: 'Sales Person',
                company: 'Edureka',
                location: 'India',
                type: 'Contract',
                status: 'Pending',
                date: '12-4-2024'
              }
              ]

const JobsContainer = () => {
      const [data, setData] = useState(jobs)

      const removeJob = (id)=> {
        const updatedJobs = data.filter((job)=> job.id !== id)
        setData(updatedJobs)
      }

  if (data.length === 0) {
    return <div>
        <h2>No job posts at the moment...</h2>
    </div>
  }
  return <section className="jobs-wrapper">
            <div className="jobs">
                {
                  data.map((job)=> {
                    const {id} = job
                    return <Job key={id} {...job} removeJob={removeJob}/>
                  })
                }
            </div>
        </section>
}

export default JobsContainer;