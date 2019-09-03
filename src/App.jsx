import React from "react";
import DisplayData from "./DisplayData";
import TimerMessage from "./TimerMessage";
import "./App.css";

const getData = () => new Promise(resolve => setTimeout(() => resolve("Some data"), 1000));

function App() {
    return (
        <div className="App">
            <DisplayData get={getData} />
            <TimerMessage />
        </div>
    );
}

export default App;
