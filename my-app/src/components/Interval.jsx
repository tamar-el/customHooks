
// Exercise 7 - Interval Component

import { useState } from "react";
import useInterval from "../hooks/useInterval";

function Interval() {
    const [count, setCount] = useState(0);

    const { start, stop, isRunning } = useInterval(
        () => setCount(prev => prev + 1),
        1000
    );

    return (
        <div>
            <h2>Count: {count}</h2>
            <p>Status: {isRunning ? "Running" : "Stopped"}</p>

            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default Interval;
