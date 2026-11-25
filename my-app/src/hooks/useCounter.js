
// exe 2 - useCounter
import { useState } from "react";

function useCounter(initial) {
     const [value, setValue] = useState(initial);

    const inc = () => {
        setValue(prev => prev+1);
    };

    const dec = () => {
        setValue(prev => prev-1);
    };

    const reset  = () => {
        setValue(initial);
    };


    return { value, inc, dec, reset };
}

export default useCounter;

