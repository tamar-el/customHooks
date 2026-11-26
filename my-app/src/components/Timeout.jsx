
//  8 - Timeout Component

import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

function Timeout() {
    const [message, setMessage] = useState("Waiting...");

    const { start, cancel, isScheduled } = useTimeout(
        () => setMessage("Time is up!"),
        3000
    );

    return (
        <div>
            <h2>{message}</h2>

            <p>
                {isScheduled ? "Scheduled" : "Not scheduled"}
            </p>

            <button onClick={start}>Start Timeout</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
}

export default Timeout;
