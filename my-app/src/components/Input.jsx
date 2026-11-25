
// exe 4 - InputComponent
import useInput from "../hooks/useInput";

function Input() {
    const { value, onChange, reset } = useInput("");

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type something..."
            />

            <p>You typed: {value}</p>

            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Input;

 
