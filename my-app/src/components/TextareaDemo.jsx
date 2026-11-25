
// exe 5 - InputComponent
import useTextarea from "../hooks/useTextarea";

function TextareaDemo() {
    const { value, onChange, reset } = useTextarea("");

    return (
        <div>
            <textarea
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

export default TextareaDemo;

 
