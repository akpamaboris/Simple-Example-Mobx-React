import "./App.css";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

const TimerView = observer(({ timer }) => (
  <span>Seconds passed: {myTimer.secondsPassed}</span>
));

function App() {
  return (
    <div className="App">
      <TimerView />
      <button onClick={() => myTimer.increaseTimer()}>
        CLICK to increment
      </button>
      <h1>State :</h1>
    </div>
  );
}

export default App;
