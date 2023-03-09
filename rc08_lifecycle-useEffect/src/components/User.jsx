import React, { useEffect, useState } from "react"

const User = () => {
  

  const [user, setUser]=useState("")

  const getUser=()=>{ fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>setUser(data.results[0]))
    .catch((err)=>(console.log(err)))
}
  useEffect(()=>{
    getUser()
  },[])


  console.log(user);


  return(
    <div>
      <h1>{user?.name?.first} {user?.name?.last}</h1>
      <img src={user?.picture?.large} alt="" />
      <p>{user?.email}</p>
      <h5>{user?.phone}</h5>
      <h4>{user?.dob?.age}</h4>

      <button className="btn btn-warning" onClick={getUser}>Get user</button>
    </div>
  )
  
}

export default User
