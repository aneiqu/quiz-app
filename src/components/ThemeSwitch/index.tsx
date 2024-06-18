import { useEffect, useState } from "react";
import moonIconDark from "/images/icon-moon-dark.svg";
import moonIconLight from "/images/icon-moon-light.svg";
import sunIconDark from "/images/icon-sun-dark.svg";
import sunIconLight from "/images/icon-sun-light.svg";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

  const toggleTheme = () =>
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new Event("storage"));
  }, [theme]);

  return (
    <div className='flex items-center justify-between h-5 md:h-7 w-20 md:w-32'>
      <img
        className='w-[0.875rem] md:w-[1.3125rem]'
        src={theme === "light" ? sunIconDark : sunIconLight}
        alt=''
      />
      <div
        className={`flex items-center bg-purple w-8 md:w-12 h-full p-1 rounded-full  relative ${
          theme === "dark" ? "" : ""
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-3 h-3 md:h-5 md:w-5 rounded-full bg-white duration-100 ${
            theme === "dark" ? "translate-x-[100%]" : ""
          }`}
        ></div>
      </div>
      <img
        className='w-3 md:w-[1.125rem]'
        src={theme === "light" ? moonIconDark : moonIconLight}
        alt=''
      />
    </div>
  );
}
