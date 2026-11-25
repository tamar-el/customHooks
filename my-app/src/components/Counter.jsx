
// exe 2 - CounterComponent

import useCounter from "../hooks/useCounter";

function Counter() {
    const { value, inc, dec, reset } = useCounter(0);

    return (
        <div>
            <h2>Counter: {value}</h2>

            <button onClick={inc}>+</button>

            <button onClick={dec}>-</button>

            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
