import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { count: 0 }; // Initialize the state

        // funcrtion for increase value.
        increaseCount = () => {
            // setting new state using annonymous function
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };
        render() {
            const { count } = this.state;
            return (
                <OriginalComponent
                    count={count}
                    increaseCount={this.increaseCount}
                />
            );
        }
    }
    return NewComponent;
};

export default withCounter;
