import ThemeSwitch from "../ThemeSwitch";

type setThemeType = {
  category: string;
  color: string;
  icon: string;
};

export default function Navbar({ category, color, icon }: setThemeType) {
  return (
    <div className='flex flex-row justify-between items-center p-4 md:p-0 h-[4.5rem] md:h-14'>
      <div className={`flex flex-row items-center`}>
        <div
          style={{ backgroundColor: color }}
          className={`w-10 h-10 md:w-14 md:h-14 rounded-md text-lg leading-[100%] flex items-center justify-center mr-4 md:mr-6 ${
            icon.length > 0 ? "" : "hidden"
          }`}
        >
          <img className='w-7 md:w-9' src={icon} />
        </div>
        <p className='headingS'>{category}</p>
      </div>
      <ThemeSwitch />
    </div>
  );
}
