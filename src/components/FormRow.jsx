const FormRow = ({type,name, labelText, placeHolder}) => {
  return(
    <div className="add-job-form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label>
            <input 
              type={type} 
              id={name} 
              name={name}
              className="form-input"
              required
              placeholder={placeHolder}
            />
          </div>
  )
}

export default FormRow;