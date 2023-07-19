import React from "react";

export default function HoverCounter({ count, incrementCount, theme }) {
    const style =
        theme === "dark"
            ? { backgroundColor: "#000000", color: "#ffffff" }
            : null;
    return (
        <div>
            <h1 style={style} onMouseOver={incrementCount}>
                Hovered {count} times
            </h1>
        </div>
    );
}
