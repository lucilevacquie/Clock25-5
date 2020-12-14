import React, {useState} from "react";
import './App.css';

const Clock = () => {

  const [break, setBreak] = useState(5)

  return(
    <div>
      <div id="break-label">Break Length
        <div id="break-length">{break}</div>
        <button id="break-increment">+</button>
        <button id="break-decrement">-</button>
      </div>
      <div id="session-label">Session Length
        <button id="session-increment">+</button>
        <button id="session-decrement">-</button>
      </div>
    </div>
    
  )
}

export default Clock;
