import { useState, useEffect } from "react";
import { Card, ThemeBtn } from "./components";
import { ThemeProvider } from "./context/theme";

export default function App()
{
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => { setThemeMode("light") }
  const darkTheme = () => { setThemeMode("dark") }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-end">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}
