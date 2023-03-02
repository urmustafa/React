import Event from "./components/1-events/Event"
import Counter from "./components/2-classComponent/Counter"
import UseStateCounter from "./components/3-useStateHook/useStateCounter"
import UseStateObject from "./components/3-useStateHook/UseStateObject"

function App() {
  return (
    <div>
     <Event></Event>
     <Counter></Counter>
     <UseStateCounter></UseStateCounter>
     <UseStateObject></UseStateObject>
    </div>
  )
}
export default App
