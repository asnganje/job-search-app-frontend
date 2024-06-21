import { FormRow } from "../components";
import FormRowSelect from "../components/FormRowSelect";
import { JOB_STATUS, JOB_TYPE } from "../utils/links";


const AddJob = () => {
  return(
    <section className="add-job-wrapper">
      <form className="add-job-form">
          <h2 className="form-title">
            Add Job
          </h2>
          <div className="form-center">
            <FormRow type="text" name="position"/>
            <FormRow type="text" name="company"/>
            <FormRow type="text" labelText="job location" name="jobLocation"/>
            <FormRowSelect labelText="job status" name= "job status" list={Object.values(JOB_STATUS)} defaultValue={JOB_STATUS.PENDING}/>
            <FormRowSelect labelText="job type" name= "job type" list={Object.values(JOB_TYPE)} defaultValue={JOB_TYPE.FULL_TIME}/>
            <button type="submit" className="btn add-job-form-btn">submit</button>
          </div>
      </form>
    </section>
  )
}

export default AddJob;