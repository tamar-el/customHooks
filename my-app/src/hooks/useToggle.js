
// exe 1 - useToggle
import { useState } from "react";

function useToggle() {

    const [value, setValue] = useState(false);

    const toggle = () => {
        setValue(prev => !prev);
    };

    const setTrue = () => {
        setValue(true);
    };

    const setFalse = () => {
        setValue(false);
    };

    return { value, toggle, setTrue, setFalse };
}

export default useToggle;

