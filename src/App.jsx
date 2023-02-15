import React from 'react';
import { useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(false)
  const timerRef = useRef();

  const msToHMSM = (ms) => {
    ms *= 10;
    let milliseconds = Math.floor((ms % 1000) / 10);
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 10)
    setPause(false)
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    setCount(0)
  }

  const pauseTimer = () => {
    clearInterval(timerRef.current)
  }


  return (
    <div className="app">
      <p className='timer__text'>
        {msToHMSM(count)}
      </p>
      <button onClick={startTimer}>▶️ Старт</button>
      <button onClick={pauseTimer}>⏸ Пауза</button>
      <button onClick={stopTimer}>⏹ Стоп</button>
    </div>
  );
}

export default App;