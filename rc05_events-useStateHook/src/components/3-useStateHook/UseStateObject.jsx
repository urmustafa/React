
import { useState } from 'react'
import React from 'react'

const UseStateObject = () => {

    const [count,setCount]=useState(0)
    const [person,setPerson]=useState({name:"mustafa",surname:"tayyar",salary:0})


    const increment=()=>{
        setCount(count+1)
    }
    const handleSalaryInc=()=>{
        setPerson({...person,salary:person.salary+500})
    }
    const handleSalaryDec=()=>{
        setPerson({...person,salary:person.salary-500})
    }

 

  return (
    <div className='container text-center mt-4'>
            <h2 className='text-danger'>Use State Counter </h2>
            <h1 className='display-4'>{person.name} {person.surname}</h1>
            <h1 className='dipsplay-4'>Salary:{person.salary}</h1>
            <button  onClick={handleSalaryInc}  className='btn btn-success'>Salary INC</button>
            <button className='btn btn-danger'>CLR</button>
            {/* <button onClick={decrement} className='btn btn-warning'>DEC</button> */}
            <button onClick={handleSalaryDec} className='btn btn-warning'> Salary DEC</button>
        </div>
  )
}

export default UseStateObject