import { useReducer } from "react";

// we made our state and action to object
// benefits : we can add more functions to action, like we can increment a variable amount of value!
const initialState = {
    counter: 0,
    counter2: 2,
};
const reducer = (state, action) => {
    // action is a object sent from button.
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + action.value };
        case "decrement":
            return { ...state, counter: state.counter - action.value };
        case "increment2":
            return { ...state, counter2: state.counter2 + action.value };
        case "decrement2":
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <div>Count - {count.counter}</div>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment", value: 5 })}
                >
                    Increment
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement", value: 2 })}
                >
                    Decrement
                </button>
            </div>
            <div>
                <div>Count - {count.counter2}</div>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment2", value: 1 })}
                >
                    Increment2
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement2", value: 1 })}
                >
                    Decrement2
                </button>
            </div>
        </div>
    );
}
