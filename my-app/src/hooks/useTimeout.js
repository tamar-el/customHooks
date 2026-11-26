
//  8 - useTimeout

import { useEffect, useRef, useState } from "react";

function useTimeout(callback, delayMs, enabled = false) {
    const [isScheduled, setIsScheduled] = useState(enabled);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!isScheduled) return;

        const id = setTimeout(() => {
            callbackRef.current();
            setIsScheduled(false);
        }, delayMs);

        return () => clearTimeout(id);
    }, [isScheduled, delayMs]);

    const start = () => setIsScheduled(true);
    const cancel = () => setIsScheduled(false);

    return { start, cancel, isScheduled };
}

export default useTimeout;
