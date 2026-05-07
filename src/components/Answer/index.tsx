import { Dispatch, SetStateAction } from "react";

const correctIcon = "/images/icon-correct.svg";
const incorrectIcon = "/images/icon-incorrect.svg";
type propsType = {
  letter: string;
  answer: string;
  index: number;
  select: Dispatch<SetStateAction<number>>;
  selected: number | undefined;
  correct: number | undefined;
  wrong: number | undefined;
  submitted: boolean;
};

export default function Answer({
  letter,
  answer,
  index,
  select,
  selected,
  correct,
  wrong,
  submitted,
}: propsType) {
  const selectAnswer = () => {
    if (submitted) return;
    select(index);
  };

  return (
    <button
      onClick={selectAnswer}
      className={`flex flex-row relative gap-4 md:gap-8 lg:gap-6 h-16 md:h-20 lg:h-[5.75rem] bg-white dark:bg-navy p-3 items-center rounded-xl md:rounded-3xl group border-[3px] transition-all duration-150 ${
        selected === index ? "border-purple" : "border-transparent"
      } ${correct === index && correct === selected ? "border-green" : ""} ${
        wrong === index ? "border-red" : ""
      } `}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 font-medium text-[1.125rem] leading-[100%] bg-lightGrey text-greyNavy rounded-md md:rounded-xl ${
          submitted ? "" : "md:group-hover:bg-[#F6E7FF] md:group-hover:text-purple"
        } transition-all duration-150 headingS ${
          selected === index ? "bg-purple text-white" : ""
        } ${correct === index && correct === selected ? "bg-green text-white" : ""} ${
          wrong === index ? "bg-red text-white" : ""
        }`}
      >
        {letter}
      </div>
      <div className='w-3/4'>
        <p className='text-[1.125rem] leading-[100%] font-medium headingS'>{answer}</p>
      </div>
      <div className='flex absolute items-center justify-center right-1 md:right-2 '>
        <img
          className={`${correct === index || wrong === index ? "" : "hidden"}`}
          src={correct === index ? correctIcon : incorrectIcon}
          alt={correct === index ? "correct answer" : "incorrect answer"}
        ></img>
      </div>
    </button>
  );
}
