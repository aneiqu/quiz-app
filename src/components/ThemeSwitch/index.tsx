import { useEffect, useState } from "react";

const moonIconDark = "/images/icon-moon-dark.svg";
const moonIconLight = "/images/icon-moon-light.svg";
const sunIconDark = "/images/icon-sun-dark.svg";
const sunIconLight = "/images/icon-sun-light.svg";

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
        alt='Sun icon'
      />
      <button
        type='button'
        aria-label='Toggle theme'
        className='flex items-center bg-purple w-8 md:w-12 h-full p-1 rounded-full relative'
        onClick={toggleTheme}
      >
        <div
          className={`w-3 h-3 md:h-5 md:w-5 rounded-full bg-white duration-100 ${
            theme === "dark" ? "translate-x-[100%]" : ""
          }`}
        ></div>
      </button>
      <img
        className='w-3 md:w-[1.125rem]'
        src={theme === "light" ? moonIconDark : moonIconLight}
        alt='Moon icon'
      />
    </div>
  );
}
