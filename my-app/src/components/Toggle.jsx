
// exe 1 - useToggle Component

import useToggle from "../hooks/useToggle";

function Toggle() {

    const { value, toggle, setTrue, setFalse } = useToggle();

    return (
        <div>
            <h2>Toggle Example</h2>

            <h3>Current Value: {value.toString()}</h3>

            <button onClick={toggle}>Toggle</button>

            <button onClick={setTrue}>Set True</button>

            <button onClick={setFalse}>Set False</button>
        </div>
    );
}

export default Toggle;
