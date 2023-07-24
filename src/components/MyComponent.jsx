import { useEffect, useState } from "react";

export default function MyComponent() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    const tick = () => {
        console.log("Clock Ticking");
        setDate(new Date());
    };

    // we can use as many useEffect() we want.
    useEffect(() => {
        console.log("Updating Document Title");
        document.title = `Clicked ${count} times.`;
    }, [count]); // without [p1,p2,p3,...] dependency list it will render everytime with every component change.

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        // do cleanup - stop the timer
        return () => {
            console.log("Component Unmounted");
            clearInterval(interval);
        }; //  this funtion from return will be called when component unmounted!!! alternative of componentWillUnmount() function.
    }, []); // if we keep blank array it will run only first time and act as componentDidMount()

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name=""
                    id=""
                />
            </p> */}
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
