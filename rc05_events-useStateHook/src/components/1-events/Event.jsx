import React from 'react'

const Event = () => {

    let text="Hi F8"

    const HandleClick=()=>{
        alert("hi evets")
    }
    const HandleReset=(msg)=>{
        console.log(msg);
    }

    function degistir(){
        text="Hello React"
        console.log(text);
    }



  return (
    <div>
        <h1>{text}</h1>
        <button onClick={HandleClick}>Click</button>
        <button onClick={()=>HandleReset("Please clear the text")}>Reset</button>


        <button onClick={degistir}>Change</button>




    </div>
  )
}

export default Event