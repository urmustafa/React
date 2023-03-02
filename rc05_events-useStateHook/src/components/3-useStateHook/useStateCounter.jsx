
import { useState } from 'react'
import React from 'react'

const useStateCounter = () => {

    const [count,setCount]=useState(0)


    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            alert('count can not be neagtive')
        }
    }

  return (
    <div className='container text-center mt-4'>
            <h2 className='text-danger'>Use State Counter </h2>
            <h1 className='dipsplay-4'>Counter:{count}</h1>
            <button onClick={increment} className='btn btn-success'>INC</button>
            <button onClick={()=>setCount(0)} className='btn btn-danger'>CLR</button>
            {/* <button onClick={decrement} className='btn btn-warning'>DEC</button> */}
            <button onClick={()=> count>0 && setCount(count-1) } className='btn btn-warning'>DEC</button>
        </div>
  )
}

export default useStateCounter