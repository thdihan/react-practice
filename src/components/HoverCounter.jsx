import withCounter from "./HOC/withCounter";

const HoverCounter = ({ count, increaseCount }) => {
    return (
        <div>
            <h1 onMouseOver={increaseCount}>Clicked {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);
