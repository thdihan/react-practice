import React from "react";

export default class Clock extends React.Component {
    render() {
        const { locale } = this.props;
        return (
            <h1 className="heading">
                <span className="text">
                    {new Date().toLocaleTimeString(locale)}
                </span>
            </h1>
        );
    }
}
