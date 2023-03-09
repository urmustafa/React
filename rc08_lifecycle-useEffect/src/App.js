import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import User from "./components/User"

function App() {

  const [show, setShow] = useState(false)
 
  return (
    <div className="container text-center mt-4">
{/* 
      <button className="btn btn-danger" onClick={()=>setShow(!show)}>
        {show?"Hide":"show"}</button>
         */}
          <User></User>
      {/* {show?<LifeCycleMethods></LifeCycleMethods>:null} */}
      {/* {show&&<LifeCycleMethods></LifeCycleMethods>} */}
      {/* {show&&<UseEffectHook/>} */}


      
    </div>
  )
}

export default App
