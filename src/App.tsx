import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`w-screen h-screen transition-all duration-200 bg-mobileLight bg-lightGrey dark:bg-darkNavy dark:bg-mobileDark text-darkNavy dark:text-white bg-no-repeat bg-cover ${theme}`}
    >
      <Navbar setTheme={setTheme} theme={theme} category='' />
    </div>
  );
}

export default App;
