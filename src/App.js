import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import ReplayTwoToneIcon from '@material-ui/icons/ReplayTwoTone';
import './App.css';

const Clock = () => {

  const [brk, setBrk] = useState(5)
  const [session, setSession] = useState(25)
  const [chrono, setChrono] = useState(session * 60)
  const [play, setPlay] = useState(false)
  const [isOnBreak, setIsOnBreak] = useState(false)


  useEffect(() => {
    if (isOnBreak){
      setChrono(brk * 60)
    } else {
      setChrono(session * 60)
    }
    
  }, [session, brk])

  const Reset = () => {
    setPlay(false)
    setBrk(5)
    setSession(25)
    setChrono(session * 60)
  }

  const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`
  }

  const ChronoFormat = time => {
    const minutes = Math.floor(time/60)
    const seconds = time % 60
    return `${minutes}:${padTime(seconds)}`
  }

  useEffect(() => {
    let timer
    if (!play){
      return
    }
    if (chrono > 0){
      timer = setTimeout(() => setChrono(c => c - 1), 1000)
    } else if (chrono === 0){
      setIsOnBreak(true)
      setChrono(brk * 60)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [chrono, play, brk, isOnBreak])

  return(
    <div id="container">
      <div id="row1">
        <h1>Clock 25 + 5</h1>
        <div id="parameters">
          <div id="session-label">Session Length
            <div id="session-length">{session}</div>
            <Button id="session-increment" onClick={() => (session + 1 <= 60) ? setSession(session + 1) : null}>
              <AddBoxTwoToneIcon/>
            </Button>
            <Button id="session-decrement" onClick={() => (session - 1 >= 0) ? setSession(session - 1) : null}>
              <IndeterminateCheckBoxTwoToneIcon/>
            </Button>
          </div>
          <div id="break-label">Break Length
            <div id="break-length">{brk}</div>
            <Button id="break-increment" onClick={() => (brk + 1 <= 60) ? setBrk(brk + 1) : null}>
              <AddBoxTwoToneIcon/>
            </Button>
            <Button id="break-decrement" onClick={() => (brk -1 >= 0) ? setBrk(brk - 1) : null}>
              <IndeterminateCheckBoxTwoToneIcon/>
            </Button>
          </div>
          
        </div>
      </div>
      
      <div id="row2">      
        <div id="timer-label">Session
          <div id="time-left">
            {ChronoFormat(chrono)}
          </div>
          <Button id="start_stop">
            <PlayCircleFilledTwoToneIcon onClick={() => setPlay(!play)}/>
          </Button>
          <Button id="reset" onClick={() => Reset()}>
            <ReplayTwoToneIcon/>
          </Button>
          {isOnBreak ? <div>Break has begun</div> : null}
        </div>
      </div>

    </div>
    
  )
}

export default Clock;
