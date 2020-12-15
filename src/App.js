// import React, { useState, useEffect, useRef } from "react";
// import Button from "@material-ui/core/Button";
// import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
// import IndeterminateCheckBoxTwoToneIcon from "@material-ui/icons/IndeterminateCheckBoxTwoTone";
// import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
// import PauseCircleFilledTwoToneIcon from "@material-ui/icons/PauseCircleFilledTwoTone";
// import ReplayTwoToneIcon from "@material-ui/icons/ReplayTwoTone";
// import Beep from "./assets/audio6.wav";
// import "./App.css";

// const modes = {
//   SESSION: "Session",
//   BREAK: "Break",
// };
// const Clock = () => {
//   const [sessionLength, setSessionLength] = useState(25);
//   const [breakLength, setBreakLength] = useState(5);
//   const [secondsLeft, setSecondsLeft] = useState(25 * 60);
//   const [mode, setMode] = useState(modes.SESSION);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isFirstSession, setIsFirstSession] = useState(true);

//   const beep = useRef();

//   const handleReset = () => {
//     setSessionLength(25);
//     setBreakLength(5);
//     setSecondsLeft(25 * 60);
//     setMode("Session");
//     setIsRunning(false);
//     setIsFirstSession(true);
//     beep.current.pause();
//     beep.current.currentTime = 0;
//   };

//   const decrement = (option) => {
//     if (option === modes.BREAK) {
//       if (!isRunning && breakLength > 1) {
//         setBreakLength((prevState) => prevState - 1);
//       }
//     }
//     if (option === modes.SESSION) {
//       if (!isRunning && sessionLength > 1) {
//         setSessionLength((prevState) => prevState - 1);
//         setSecondsLeft((sessionLength - 1) * 60);
//       }
//     }
//   };

//   const increment = (option) => {
//     if (option === modes.BREAK) {
//       if (!isRunning && breakLength < 60) {
//         setBreakLength((prevState) => prevState + 1);
//       }
//     }
//     if (option === modes.SESSION) {
//       if (!isRunning && sessionLength < 60) {
//         setSessionLength((prevState) => prevState + 1);
//         setSecondsLeft((sessionLength + 1) * 60);
//       }
//     }
//   };

//   const padTime = (time) => {
//     return String(time).length === 1 ? `0${time}` : `${time}`;
//   };

//   const secondsLeftFormat = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${padTime(seconds)}`;
//   };

//   useEffect(() => {
//     const handleSwitch = () => {
//       if (mode === modes.SESSION) {
//         setMode(modes.BREAK);
//         setSecondsLeft(breakLength * 60);
//       } else if (mode === modes.BREAK) {
//         setMode(modes.SESSION);
//         setSecondsLeft(sessionLength * 60);
//       }
//     };
//     let countdown;

//     if (isRunning && secondsLeft > 0) {
//       countdown = setInterval(() => {
//         setSecondsLeft(secondsLeft - 1);
//       }, 1000);
//     } else if (isRunning && secondsLeft === 0) {
//       beep.current.play();
//       countdown = setInterval(() => {
//         setSecondsLeft(secondsLeft - 1);
//       }, 1000);
//       beep.current.play();
//       handleSwitch();
//     } else {
//       clearInterval(countdown);
//     }
//     return () => clearInterval(countdown);
//   }, [secondsLeft, isRunning, sessionLength, breakLength, mode]);

//   let minutes = Math.floor(secondsLeft / 60);
//   let seconds = secondsLeft % 60;

//   return (
//     <div id="container">
//       <div id="row1">
//         <h1>Clock 25 + 5</h1>
//         <div id="parameters">
//           <div id="session-label">
//             Session Length
//             <div id="session-length">{sessionLength}</div>
//             <Button
//               id="session-increment"
//               onClick={() => increment(modes.SESSION)}
//             >
//               <AddBoxTwoToneIcon />
//             </Button>
//             <Button
//               id="session-decrement"
//               onClick={() => decrement(modes.SESSION)}
//             >
//               <IndeterminateCheckBoxTwoToneIcon />
//             </Button>
//           </div>
//           <div id="break-label">
//             Break Length
//             <div id="break-length">{breakLength}</div>
//             <Button id="break-increment" onClick={() => increment(modes.BREAK)}>
//               <AddBoxTwoToneIcon />
//             </Button>
//             <Button id="break-decrement" onClick={() => decrement(modes.BREAK)}>
//               <IndeterminateCheckBoxTwoToneIcon />
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div id="row2">
//         <div className="small" id="timer-label">
//           {mode}
//         </div>
//         <div id="time-left">
//           {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:
//           {seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
//         </div>
//         <Button
//           id="start_stop"
//           onClick={
//             isRunning ? () => setIsRunning(false) : () => setIsRunning(true)
//           }
//         >
//           {isRunning ? (
//             <PauseCircleFilledTwoToneIcon />
//           ) : (
//             <PlayCircleFilledTwoToneIcon />
//           )}
//         </Button>
//         <Button id="reset" onClick={() => handleReset()}>
//           <ReplayTwoToneIcon />
//         </Button>
//         {mode === modes.BREAK && <div>A break as begun</div>}
//         {mode !== modes.BREAK && !isFirstSession && (
//           <div>A session has begun</div>
//         )}
//       </div>
//       <audio ref={beep} id="beep" src={Beep} />
//     </div>
//   );
// };

// export default Clock;


import React, {useState, useEffect, useRef} from "react";
import Button from '@material-ui/core/Button';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import ReplayTwoToneIcon from '@material-ui/icons/ReplayTwoTone';
import Beep from "./assets/audio6.wav";
import './App.css';

const Clock = () => {

  const [brk, setBrk] = useState(5)
  const [session, setSession] = useState(25)
  const [chrono, setChrono] = useState(session * 60)
  const [play, setPlay] = useState(false)
  const [isOnBreak, setIsOnBreak] = useState(false)
  const [isFirstSession, setIsFirstSession] = useState(true)

  const beep = useRef()

  useEffect(() => {
    if (isOnBreak){
      setChrono(brk * 60)
    } else {
      setChrono(session * 60)
    }

  }, [session, brk, isOnBreak])

  const Reset = () => {
    setPlay(false)
    setBrk(5)
    setSession(25)
    setChrono(session * 60)
    setIsFirstSession(true)
    // beep.current.pause()
    // beep.current.load()
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
      beep.current.play()
      if(!isOnBreak){
        setIsOnBreak(true)
        setChrono(brk * 60)
      } else {
        setIsOnBreak(false)
        setChrono(session * 60)
        setIsFirstSession(false)
      }
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [chrono, play, brk, isOnBreak, session])

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
            <Button id="session-decrement" onClick={() => (session - 1 > 0) ? setSession(session - 1) : null}>
              <IndeterminateCheckBoxTwoToneIcon/>
            </Button>
          </div>
          <div id="break-label">Break Length
            <div id="break-length">{brk}</div>
            <Button id="break-increment" onClick={() => (brk + 1 <= 60) ? setBrk(brk + 1) : null}>
              <AddBoxTwoToneIcon/>
            </Button>
            <Button id="break-decrement" onClick={() => (brk -1 > 0) ? setBrk(brk - 1) : null}>
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
          <Button id="start_stop" onClick={play ? () => setPlay(false) : () => setPlay(true)}>
            {play ?  <PauseCircleFilledTwoToneIcon /> : <PlayCircleFilledTwoToneIcon /> }
          </Button>
          <Button id="reset" onClick={() => Reset()}>
            <ReplayTwoToneIcon/>
          </Button>
          {isOnBreak && <div>A break as begun</div>}
          {(!isOnBreak && !isFirstSession) && <div>A session has begun</div>}
        </div>
        <audio ref={beep} id="beep" src={Beep}/>
      </div>

    </div>

  )
}

export default Clock;
