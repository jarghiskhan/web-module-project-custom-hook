import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialvalue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialvalue);
    return [darkMode, setDarkMode];
};
