import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay?: number, callBack?: () => void): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (callBack) callBack();
            return setDebouncedValue(value);
        }, delay || 800);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;