import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// import { useState } from "react";
let states = []; // [0: [value,setter], 1: [value,setter]]
let stateIndex = -1;
function useState(defaultValue) {
    const index = ++stateIndex;
    console.log("USE STATE CALLED" + ` stateIndex = ${stateIndex}`);
    if (states[index]) return states[index];
    console.log("passed this place");
    const setValue = (newValue) => {
        states[index][0] = newValue;
        render_with_dihan();
    };

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}
export default function App() {
    const [todo, setTodo] = useState("");
    const [warning, setWarning] = useState(null);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes(".js")
            ? "You need JavaScript skill to complete the task. Do you have it?"
            : null;

        setTodo(inputValue);
        setWarning(updatedWarning);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || "Good choice!"}</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
function render_with_dihan() {
    stateIndex = -1;
    root.render(
        // <React.StrictMode>
        <App />
        // </React.StrictMode>
    );
}
render_with_dihan();
