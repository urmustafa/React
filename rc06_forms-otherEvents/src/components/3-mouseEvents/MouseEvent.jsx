import { useState } from "react"

const MouseEvent = () => {
  const [visible, setVisible] = useState(false)  
  const [toggle, setToggle] = useState(false) 

  const [coordX, setCoordX] = useState() 
  const [coordY, setCoordY] = useState() 

  const handleMouseMove=(e)=>{
    setCoordX(e.nativeEvent.offsetX)
    setCoordY(e.nativeEvent.offsetY)
  }
 

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseOver={()=>{setVisible(true)}}
        onMouseOut={()=>{setVisible(false)}}  
      >
        todo item 1
      </div>
      { visible && <div>Mouse Event</div>}
      

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={(e)=>{
          setToggle(!toggle) 
          console.log(toggle);
          toggle
                ?(e.target.className="bg-success text-light w-50 p-4 mt-4")
                :(e.target.className="bg-danger text-light w-50 p-4 mt-4");
        }}
      >
        todo item 2
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMouseMove}
      >
        todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p>
    </div>
  )
}

export default MouseEvent
