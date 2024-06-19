import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Answer from "../Answer";
import errorIcon from "/images/icon-error.svg";

export default function Quiz() {
  const location = useLocation();
  const { icon, title, color, data } = location.state;
  const [selected, setSelected] = useState<number>(5);
  const [question, setQuestion] = useState<number>(0);
  const [correct, setCorrect] = useState<number>();
  const [wrong, setWrong] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);
  const score = useRef<number>(0);
  const letters = ["A", "B", "C", "D"];
  const questions = data[question].options.map((el: string, i: number) => (
    <Answer
      letter={letters[i]}
      question={el}
      key={i}
      index={i}
      select={setSelected}
      selected={selected}
      correct={correct}
      wrong={wrong}
      submited={submited}
    />
  ));

  useEffect(() => {
    if (selected < 5) setError(false);
  }, [selected]);

  const nextQuestion = () => {
    if (question + 1 === data.length) moveToResult();
    setQuestion((prev) => prev + 1);
    setSelected(5);
    setCorrect(undefined);
    setWrong(undefined);
    setSubmited(false);
  };

  const validate = () => {
    if (selected > 4) return setError(true);
    const selectedAnswer = data[question].options[selected];
    const correctAnswer = data[question].answer;
    setCorrect(data[question].options.indexOf(correctAnswer));
    if (selectedAnswer === correctAnswer) score.current += 1;
    setWrong(
      selectedAnswer === correctAnswer ? undefined : data[question].options.indexOf(selectedAnswer)
    );
    setSubmited(true);
  };

  const submitAnswer = () => {
    if (selected == undefined || selected < 0) return;
    validate();
  };

  const navigate = useNavigate();
  const moveToResult = () => {
    navigate(`/result/${title}`, {
      state: {
        score: score.current,
        title: title,
        icon: icon,
        color: color,
        maxScore: data.length,
      },
    });
  };

  return (
    <div className='lg:flex lg:gap-32 w-full px-6 pt-8 md:p-0 md:mt-[3.0625rem] lg:mt-[5.3125rem]'>
      <div className='flex flex-col mb-10 md:mb-16 lg:w-1/2'>
        <div className='flex flex-col gap-3 md:gap-[1.6875rem] mb-6 md:mb-10 '>
          <p className='text-[0.875rem] italic leading-[150%] bodyS text-lightBluish'>
            Question {question + 1} of {data.length}
          </p>
          <p className='text-[1.25rem] leading-[120%] font-medium text-darkNavy dark:text-white headingM'>
            {data[question].question}
          </p>
        </div>
        <div className='w-full h-4 bg-white rounded-full p-1 dark:bg-navy'>
          <div
            style={{ width: (question + 1) * 10 + "%" }}
            className={`h-2 bg-purple rounded-full transition-all duration-150`}
          ></div>
        </div>
      </div>
      <div className='flex flex-col gap-3 md:gap-6 lg:w-7/12'>
        {questions}

        <div className='flex flex-col w-full'>
          <button
            className='h-14 md:h-[5.75rem] flex items-center justify-center text-white text-[1.125rem] font-medium bg-purple rounded-xl md:rounded-3xl headingS'
            onClick={submited ? nextQuestion : submitAnswer}
          >
            {submited
              ? question + 1 === data.length
                ? "Finish Quiz"
                : "Next Question"
              : "Submit Answer"}
          </button>
          <div
            className={`flex flex-row items-center justify-center text-red dark:text-white mt-3 md:mt-8 ${
              error ? "" : "hidden"
            }`}
          >
            <div className='w-10 h-10 flex items-center justify-center'>
              <img src={errorIcon} className='w-[1.875rem] h-[1.875rem]'></img>
            </div>
            <p className='text-[1.125rem] leading-[100%] bodyM '>Please select an answer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
