import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

//! 1) Creating Context
export const LoginContext = createContext()

//! 2) Provider
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const values ={user,setUser}
  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext=()=>{
  return useContext(LoginContext)
}
export default LoginProvider