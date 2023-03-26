import React from "react";
import { RouterProvider } from "react-router-dom";
import { useTheme } from "./Context/CentralContextProvider";
import { router } from "./routes/Router";
import "./App.css";

function App() {
  const { theme, setTheme } = useTheme();
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };
  return (
    <div className={theme === "light" ? "App light" : "App dark"}>
      <div>
        <input
          type="radio"
          id="dark"
          name="theme"
          checked={theme === "dark"}
          value="dark"
          onChange={onChangeValue}
        />
        <label htmlFor="dark">Dark Mode</label>
        <input
          type="radio"
          id="light"
          name="theme"
          checked={theme === "light"}
          value="light"
          onChange={onChangeValue}
        />
        <label htmlFor="light">Light Mode</label>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
