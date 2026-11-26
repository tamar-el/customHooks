
//  6 - Previous Component

import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function Previous() {
    const [count, setCount] = useState(0);

    const previousValue = usePrevious(count);

    return (
        <div>
            <h2>Current: {count}</h2>
            <h3>Previous: {previousValue ?? "None"}</h3>

            <button onClick={() => setCount(prev => prev + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Previous;
