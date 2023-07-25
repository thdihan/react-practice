import { useCallback, useEffect, useState } from "react";

// custom hook
const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    // two solution , useCallback() or move the function to useEffect()
    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screenSize);
    }, [screenSize]);

    useEffect(() => {
        // const checkScreenSize = () => {
        //     setOnSmallScreen(window.innerWidth < screenSize);
        // };
        // checkScreenSize();
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [checkScreenSize]);
    return onSmallScreen;
};

export default useWindowWidth;
