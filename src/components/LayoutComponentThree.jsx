import useWindowWidth from "../hooks/useWindowWidth";

export default function LayoutComponent() {
    const onSmallScreen = useWindowWidth(600);
    return (
        <div className={onSmallScreen ? "small" : "large"}>
            <h1>
                You are browsing on {onSmallScreen ? "small" : "large"} device.
            </h1>
        </div>
    );
}
