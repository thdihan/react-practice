import { useContext } from "react";
import { counterContext } from "../App_withContext";

export default function ComponentB() {
    const countContext = useContext(counterContext);
    return (
        <div>
            <div>Component A</div>
            <button
                type="button"
                onClick={() => countContext.countDispatch("increment")}
            >
                Increment
            </button>
            <button
                type="button"
                onClick={() => countContext.countDispatch("decrement")}
            >
                Decrement
            </button>
        </div>
    );
}
