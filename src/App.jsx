import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/section";
import React from "react";
import ThemeContext from "./contexts/themeContext";

export default class App extends React.Component {
    state = {
        theme: "dark",
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === "dark")
                    return {
                        theme: "light",
                    };
                else {
                    return {
                        theme: "dark",
                    };
                }
            });
        },
    };

    render() {
        const { theme, switchTheme } = this.state;
        return (
            <div className="app">
                <Counter>
                    {(counter, incrementCount) => (
                        <ClickCounter
                            count={counter}
                            incrementCount={incrementCount}
                        />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme, switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
