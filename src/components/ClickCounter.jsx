import React from "react";

export default function ClickCounter({ count, increaseCount }) {
    return (
        <div>
            <button type="button" onClick={increaseCount}>
                Clicked {count} times
            </button>
        </div>
    );
}
