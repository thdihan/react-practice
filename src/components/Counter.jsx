import React, { Children } from "react";

export default class Counter extends React.Component {
    state = { count: 0 }; // Initialize the state

    // funcrtion for increase value.
    increaseCount = () => {
        // setting new state using annonymous function
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };
    render() {
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.increaseCount);
    }
}
