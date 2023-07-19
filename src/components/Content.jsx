import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import ThemeContext from "../contexts/themeContext";
import { useContext } from "react";
export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is from Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
