import React, { useEffect, useState } from "react"

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

const UseEffectHook = () => {

  const [count, setCount] = useState(0) 
  
  // useEffect (()=>{
  //   console.log("componentdidmount");
  //   setTimeout(()=>alert("Data fetch"),1000)
  // }, [count])
  const fetchData=()=>{
    console.log("daaaataçekildi goçmar");
  }
    useEffect (()=>{
    console.log("componentdidmount");
    setTimeout(()=>alert("Data fetch"),1000)

    const timer=setInterval(
      fetchData,1000)
    

    return()=>{
        clearInterval(timer)
        console.log("unMounting");
    }

  }, [])
 
  
  return (
    <div className="container text-center">
    <h1 className="text-danger">LIFECYCLE METHODS</h1>
    <h3>COUNT={count}</h3>
    <button className="btn btn-info" onClick={()=>setCount(count+1)}>
      INC
    </button>
  </div>
  )
}

export default UseEffectHook
