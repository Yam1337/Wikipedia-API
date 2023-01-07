import { useEffect, useState } from "react";
import { WindowSizeType } from "../types";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSizeType>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};
