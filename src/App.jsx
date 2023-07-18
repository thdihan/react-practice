import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
function App() {
    return (
        <div className="app">
            <Counter>
                {(count, increaseCount) => (
                    <ClickCounter count={count} increaseCount={increaseCount} />
                )}
            </Counter>

            <Counter>
                {(count, increaseCount) => (
                    <HoverCounter count={count} increaseCount={increaseCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
