import { useState } from "react"

const Form = () => {


  const [username,setUsername]=useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername=(e)=>{
    setUsername(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    alert(`username:${username} email:${email}
    passowrd:${password}`)

    setEmail("")
    setPassword("")
    setUsername("")
    console.log(username);
    console.log(email);
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-danger">Forms</h2>

        

        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name: 
           <span> {username}</span></label>
          <input type="text" className="form-control" id="username" onChange={handleUsername} value={username}/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: <span>{email}</span></label>
          <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
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

export default Form
