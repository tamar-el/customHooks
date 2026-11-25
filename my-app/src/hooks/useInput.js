
// exe 4 - useInput
import { useState } from "react";

function useInput(initial) {
    const [value, setValue] = useState(initial);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue(initial);
    };

    return { value, onChange, setValue, reset };
}

export default useInput;

