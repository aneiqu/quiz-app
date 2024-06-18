import { Link } from "react-router-dom";

type propsType = {
  icon: string;
  title: string;
  color: string;
  data: Array<object>;
};

export default function CategoryContainer({ icon, title, color, data }: propsType) {
  return (
    <Link
      to={`/quiz/${title.toLocaleLowerCase()}`}
      state={{ icon, title, color, data }}
      className='h-16 md:h-20 flex items-center bg-white dark:bg-navy rounded-xl p-3'
    >
      <div
        style={{ backgroundColor: color }}
        className={`w-10 h-10 md:w-14 md:h-14 rounded-md flex items-center justify-center mr-6`}
      >
        <img className='w-7 md:w-9' src={icon} alt='' />
      </div>
      <span className='headingS'>{title}</span>
    </Link>
  );
}
