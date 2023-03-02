import { useState } from "react"

const FormWithObject = () => {


  const [formData, setFormData] = useState({

    username:"",
    email:"",
    password:"",
    adress:"",


  })

  const {username,email,password,adress}=formData

  const handleFormData=(e)=>{
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]:e.target.value})
  }




  const handleSubmit=(e)=>{
    e.preventDefault()
    alert(`username:${username} email:${email}
    password:${password}`)


   
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">Forms With Object</h2>

        

        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name: 
           <span> {username}</span></label>
          <input type="text" className="form-control" id="username" 
          onChange={handleFormData} value={username}/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: 
          <span>{email}</span></label>
          <input type="email" className="form-control" id="email" 
          onChange={handleFormData} value={email}/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" 
          onChange={handleFormData} value={password}/>
        </div>
        <div className="mb-3">
          <label htmlFor="adress" className="form-label">Adress</label>
          <input type="text" className="form-control" id="adress"
          onChange={handleFormData} value={adress}/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit
        </button>
      </form>
  )
}

export default FormWithObject
