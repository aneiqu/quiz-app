import { quizzes } from "../../data/data.json";
import Container from "../Container";

export default function homeScreen() {
  const categories = quizzes.map((el, i) => {
    return <Container key={i} icon={el.icon} title={el.title} />;
  });

  return (
    <div className='h-full p-6 pt-8'>
      <div className='flex flex-col gap-4 mb-10'>
        <div className='flex flex-col gap-2'>
          <p className='text-[2.5rem] font-light leading-[100%]'>Welcome to the</p>
          <p className='text-[2.5rem] font-medium leading-[100%]'>Frontend Quiz!</p>
        </div>
        <p className='text-[0.875rem] italic leading-[150%]'>Pick a subject to get started.</p>
      </div>
      <div className='flex flex-col gap-3'>{categories}</div>
    </div>
  );
}
