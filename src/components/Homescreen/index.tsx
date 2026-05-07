import { quizzes } from "../../data/data.json";
import CategoryContainer from "../CategoryContainer";

const categories = quizzes.map((el, i) => {
  return (
    <CategoryContainer
      key={i}
      icon={el.icon}
      title={el.title}
      color={el.color}
      data={el.questions}
    />
  );
});

export default function Homescreen() {
  return (
    <>
      <div className='p-6 pt-8 md:p-0 md:pt-[3.9375rem] lg:flex lg:justify-between'>
        <div className='flex flex-col gap-4 lg:gap-12 mb-10 md:mb-16'>
          <div className='flex flex-col gap-2'>
            <p className='text-[2.5rem] font-light headingL leading-[100%]'>Welcome to the</p>
            <p className='text-[2.5rem] font-medium headingLBold leading-[100%]'>Frontend Quiz!</p>
          </div>
          <p className='text-[0.875rem] italic leading-[150%] bodyS'>
            Pick a subject to get started.
          </p>
        </div>
        <div className='flex flex-col gap-3 lg:gap-6 lg:w-[35.25rem]'>{categories}</div>
      </div>
    </>
  );
}
