
// exe 3 - CounterWithStepComponent

import useCounterWithStep from "../hooks/useCounterWithStep";

function CounterWithStep() {
    const { value, inc, dec, reset } = useCounterWithStep(0);

    return (
        <div>
            <h2>CounterWithStep: {value}</h2>

            <button onClick={inc}>+</button>

            <button onClick={dec}>-</button>

            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default CounterWithStep;
