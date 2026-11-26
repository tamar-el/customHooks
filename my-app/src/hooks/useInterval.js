
// 7 - useInterval

import { useEffect, useRef, useState } from "react";

function useInterval(callback, intervalMs, enabled = false) {
    const [isRunning, setIsRunning] = useState(enabled);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!isRunning) return;

        const id = setInterval(() => {
            callbackRef.current();
        }, intervalMs);

        return () => clearInterval(id);
    }, [isRunning, intervalMs]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);

    return { start, stop, isRunning };
}

export default useInterval;
