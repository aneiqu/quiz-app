import { Link, useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className='px-6 pt-8 md:p-0 md:mt-[3.0625rem] lg:flex lg:justify-between gap-8'>
      <div className='flex flex-col gap-2 mb-10 w-full'>
        <p className='text-[2.5rem] font-light headingL leading-[100%] headingL'>Quiz completed</p>
        <p className='text-[2.5rem] font-medium headingLBold leading-[100%] headingLBold'>
          You scored...
        </p>
      </div>
      <div className='w-full'>
        <div className='flex flex-col items-center p-8 md:p-12 gap-4 md:gap-10 bg-white dark:bg-navy rounded-xl md:rounded-3xl'>
          <div className='flex items-center'>
            <div
              style={{ backgroundColor: data.color }}
              className={`h-10 md:h-14 w-10 md:w-14 mr-4 flex items-center justify-center rounded-md md:rounded-lg`}
            >
              <img className='w-6 md:w-8' src={data.icon}></img>
            </div>
            <p className='text-[1.125rem] font-medium leading-[100%] headingS'>{data.title}</p>
          </div>
          <div>
            <p className='text-[5.5rem] font-medium leading-[100%] display md:mb-4'>{data.score}</p>
            <p className='text-[1.125rem] text-lightBluish leading-[100%] bodyM'>
              Out of {data.maxScore}
            </p>
          </div>
        </div>
        <Link
          to='/'
          className='h-14 md:h-24 flex items-center justify-center text-white text-[1.125rem] font-medium bg-purple rounded-xl rounded-3xl mt-3 md:mt-8 headingS'
        >
          Play Again
        </Link>
      </div>
    </div>
  );
}
