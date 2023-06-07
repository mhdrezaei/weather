import { createContext, useState } from "react";

const UiContext = createContext();

export function UiProvider({ children }) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const toggleMode = () => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    }
  };
  const themeHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    }
  };

  return (
    <UiContext.Provider value={{ themeMode, themeHandler, toggleMode }}>
      {children}
    </UiContext.Provider>
  );
}
export default UiContext;
