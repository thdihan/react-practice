import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, increaseCount }) => {
    return (
        <div>
            <button type="button" onClick={increaseCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);
