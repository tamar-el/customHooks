
// exe 3 - useCounterWithStep
import { useState } from "react";

function useCounterWithStep(initial,step=2) {
     const [value, setValue] = useState(initial);

    const inc = () => {
        setValue(prev => prev+step);
    };

    const dec = () => {
        setValue(prev => prev-step);
    };

    const reset  = () => {
        setValue(initial);
    };


    return { value, inc, dec, reset };
}

export default useCounterWithStep;

