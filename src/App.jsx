import { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);
  const startTimer = useRef(null)
  const endTimer = useRef(null)
  const timer = useRef(null)

  function Timer() {
    timer.current = setInterval(() => {
      setCounter((e) => {
        return e + 1
      })
    }, 1000)
  }

  if (counter == endTimer.current) {
    clearInterval(timer.current);
  }


  return (
    <div className='App'>

      <div style={{ margin: "20px" }}>
        <h2>{counter}</h2>
      </div>

      <div>
        <input type={"number"} id="timeStart" placeholder='Start Time' />
      </div>

      <div>
        <input type={"number"} id="timeEnd" placeholder='End Time' />
      </div>

      <div>
        <button style={{ width: "170px", height: "35px", margin: "10px", color: "white", backgroundColor: "gray", border: "none" }}
          onClick={() => {
            startTimer.current = +document.getElementById("timeStart").value;
            endTimer.current = +document.getElementById("timeEnd").value;
            setCounter(startTimer.current);
            Timer();
          }}
        >
          start timer
        </button>
      </div>



    </div>
  )
}

export default App
