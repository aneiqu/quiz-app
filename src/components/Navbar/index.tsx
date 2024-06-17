import { Dispatch, SetStateAction } from "react";
import ThemeSwitch from "../ThemeSwitch";

type setThemeType = {
  setTheme: Dispatch<SetStateAction<string>>;
  theme: string;
  category: string;
};

export default function Navbar({ setTheme, theme, category }: setThemeType) {
  return (
    <div className='flex flex-row justify-between items-center p-4 h-[4.5rem]'>
      <span>{category}</span>
      <ThemeSwitch setTheme={setTheme} theme={theme} />
    </div>
  );
}
