import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import ReplayTwoToneIcon from '@material-ui/icons/ReplayTwoTone';
import './App.css';

const Clock = () => {

  const [brk, setBrk] = useState(5)
  const [session, setSession] = useState(25)
  const [chrono, setChrono] = useState(session)

  const Reset = () => {
    setBrk(5)
    setSession(25)
    setChrono(25)
  }


  return(
    <div id="container">
      <div id="row1">
        <h1>Clock 25 + 5</h1>
        <div id="parameters">
          <div id="break-label">Break Length
            <div id="break-length">{brk}</div>
            <Button id="break-increment" onClick={() => setBrk(brk + 1)}>
              <AddBoxTwoToneIcon/>
            </Button>
            <Button id="break-decrement" onClick={() => setBrk(brk - 1)}>
              <IndeterminateCheckBoxTwoToneIcon/>
            </Button>
          </div>
          <div id="session-label">Session Length
            <div id="session-length">{session}</div>
            <Button id="session-increment" onClick={() => setSession(session + 1)}>
              <AddBoxTwoToneIcon/>
            </Button>
            <Button id="session-decrement" onClick={() => setSession(session - 1)}>
              <IndeterminateCheckBoxTwoToneIcon/>
            </Button>
          </div>
        </div>
      </div>
      
      <div id="row2">      
        <div id="timer-label">Session
          <div id="time-left">{chrono}</div>
          <Button id="start_stop">
            <PlayCircleFilledTwoToneIcon/>
          </Button>
          <Button id="reset" onClick={() => Reset()}>
            <ReplayTwoToneIcon/>
          </Button>
        </div>
      </div>

    </div>
    
  )
}

export default Clock;
