import { Dispatch, SetStateAction } from "react";
import moonIconDark from "/images/icon-moon-dark.svg";
import moonIconLight from "/images/icon-moon-light.svg";
import sunIconDark from "/images/icon-sun-dark.svg";
import sunIconLight from "/images/icon-sun-light.svg";

type setThemeType = {
  setTheme: Dispatch<SetStateAction<string>>;
  theme: string;
};

export default function ThemeSwitch({ setTheme, theme }: setThemeType) {
  const toggleTheme = () =>
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <div className='flex items-center justify-between h-5 w-20'>
      <img className='w-[0.875rem]' src={theme === "light" ? sunIconDark : sunIconLight} alt='' />
      <div
        className={`flex items-center bg-purple w-8 h-full p-1 rounded-full  relative ${
          theme === "dark" ? "" : ""
        }`}
        onClick={toggleTheme}
      >
        <div
          className={`w-3 h-3 rounded-full bg-white duration-100 ${
            theme === "dark" ? "translate-x-[100%]" : ""
          }`}
        ></div>
      </div>
      <img className='w-3' src={theme === "light" ? moonIconDark : moonIconLight} alt='' />
    </div>
  );
}
