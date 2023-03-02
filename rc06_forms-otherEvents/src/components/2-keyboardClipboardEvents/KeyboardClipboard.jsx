import { useState } from "react"

const KeyboardClipboard = () => {

  const [inputData, setInputData] = useState("")

  const handleKeyDown=(e)=>{
    console.log(e.keyCode);
    if (e.keyCode>=97 && e.keyCode<=105) {
      e.preventDefault()
      alert("please dont enter a number")
      e.preventDefault
    }
  }
  const handleAreaPaste=(e)=>{
    console.log(e);
    e.target.style.fontSize="20px"
    e.target.style.color="blue"
    e.target.value+=e.clipboardData.getData("text").toLocaleUpperCase()
    e.preventDefault()
  }


  return (
    <div className="container text-center">
      <h2 className="display-5 text-danger">Keyboard-clipBoard events</h2>
      <input type="text" className="form-control" 
      onChange={(e)=>{
        e.target.value=e.target.value.toUpperCase()
        setInputData(e.target.value) 
        }}
        onKeyDown={handleKeyDown}
        
        />

        <div className="text-start mt-4">
          <h6>Copied Input Data</h6>
          <p onCopy={(e)=>{alet("cannnot cop this text")}} className="text-start mt-4">{inputData.toLowerCase()}</p>
        </div>

      

      <textarea className="form-control" 
      name="textarea"
      id="textarea" 
      cols="30" rows="10"
      onPaste={handleAreaPaste}
      >
      
      </textarea>
    </div>
  )
}

export default KeyboardClipboard
