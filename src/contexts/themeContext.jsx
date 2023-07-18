// import React from "react";
import createContext from "../lib/Context";
// const themeContext = React.createContext();
const themeContext = createContext({
    theme: light,
});
export default themeContext;
