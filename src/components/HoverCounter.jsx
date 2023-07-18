import React from "react";

export default function HoverCounter({ count, increaseCount }) {
    return (
        <div>
            <h1 onMouseOver={increaseCount}>Clicked {count} times</h1>
        </div>
    );
}
