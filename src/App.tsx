import "./App.css";

import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

type childrenProp = {
  children: ReactNode;
};

function App({ children }: childrenProp) {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

  useEffect(() => {
    function changeTheme() {
      setTheme(localStorage.getItem("theme") || "light");
    }

    window.addEventListener("storage", changeTheme);

    return () => {
      window.removeEventListener("storage", changeTheme);
    };
  }, []);

  const location = useLocation();

  return (
    <div
      className={`w-screen h-screen transition-all duration-200 bg-mobileLight bg-lightGrey dark:bg-darkNavy dark:bg-mobileDark md:bg-tabletLight md:dark:bg-tabletDark lg:bg-desktopLight lg:dark:bg-desktopDark text-darkNavy dark:text-white bg-no-repeat bg-cover md:p-16 md:pt-10 lg:p-[8.75rem] lg:pt-[5.1875rem] ${theme}`}
    >
      <Navbar
        category={location.state?.title || ""}
        color={location.state?.color || ""}
        icon={location.state?.icon || ""}
      />
      {children}
    </div>
  );
}

export default App;
