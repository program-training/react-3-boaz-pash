import { useEffect, useState } from "react";
interface State {
  time: number;
  seconds: number;
  minutes: number;
}
function Timer(): JSX.Element {
  const [timerButton, setTimerButton] = useState<boolean>(false);
  const [timer, setTimer] = useState<State>({
    time: 60,
    seconds: 0,
    minutes: 1,
  });
  const handelTimer = () => { 
    setTimerButton((prev) => !prev);
    useEffect(() => {
      if (timerButton) {
        setTimeout(() => {
          if (timer.time === 0) {
            return;
          }
          setTimer({
            time: timer.time - 1,
            seconds: timer.time - Math.floor((timer.time - 1) / 60) * 60 - 1,
            minutes: Math.floor((timer.time - 1) / 60),
          });
        }, 1000);
      }
    }, [timer.time]);
  };

  console.log(timer);

  return (
    <div>
      <h1 style={{ color: "black" }}>{`${timer.minutes}:${
        timer.seconds <= 10 ? `0${timer.seconds}` : timer.seconds
      }`}</h1>
      <button onClick={() => handelTimer}>{
        timerButton ? "OFF" : "ON"}</button>
    </div>
  );
}
export default Timer;
