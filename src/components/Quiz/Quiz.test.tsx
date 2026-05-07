import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Quiz from ".";
import { quizzes } from "../../data/data.json";
import Homescreen from "../Homescreen";
import Result from "../Result";
import ProtectedQuiz from "./protected";

describe("Quiz", () => {
  const quiz = quizzes[0];
  const renderQuiz = (data = quiz.questions) =>
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/quiz/test",
            state: {
              icon: quiz.icon,
              title: quiz.title,
              color: quiz.color,
              data,
            },
          },
        ]}
      >
        <Routes>
          <Route path='/quiz/:title' Component={Quiz}></Route>
          <Route path='/result/:title' Component={Result}></Route>
        </Routes>
      </MemoryRouter>,
    );

  it("renders a quiz", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' Component={Homescreen}></Route>
          <Route path='/quiz/*' Component={ProtectedQuiz}></Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    const htmlLink = screen.getByRole("link", {
      name: /html/i,
    });

    expect(htmlLink).toHaveAttribute("href", "/quiz/html");
    await user.click(htmlLink);
    expect(screen.getByText(quiz.questions[0].question)).toBeInTheDocument();
  });

  it("shows validation message until user selects an answer", async () => {
    renderQuiz();

    const answerButton = screen.getByRole("button", { name: /submit answer/i });
    await userEvent.click(answerButton);
    const errorMessage = screen.getByText(/Please select an answer/i);
    expect(errorMessage).toBeInTheDocument();
    await userEvent.click(screen.getByText(quiz.questions[0].options[0]));
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("provides feedback on answer submit", async () => {
    renderQuiz([
      {
        question: "Test question",
        options: ["Test1", "Test2"],
        answer: "Test2",
      },
    ]);

    const wrongAnswer = screen.getByRole("button", { name: /test1/i });
    const correctAnswer = screen.getByRole("button", { name: /test2/i });
    await userEvent.click(wrongAnswer);
    await userEvent.click(screen.getByRole("button", { name: /submit answer/i }));
    expect(wrongAnswer).toHaveClass("border-red");
    expect(within(wrongAnswer).getByRole("img", { name: /incorrect answer/i })).toBeInTheDocument();
    expect(within(correctAnswer).getByRole("img", { name: /correct answer/i })).toBeInTheDocument();
  });

  it("allows user to go to next question", async () => {
    renderQuiz();

    await userEvent.click(screen.getByText(quiz.questions[0].options[0]));
    await userEvent.click(screen.getByRole("button", { name: /submit answer/i }));
    const nextQuestionButton = screen.getByRole("button", { name: /next question/i });
    expect(nextQuestionButton).toBeInTheDocument();
    await userEvent.click(nextQuestionButton);
    expect(screen.getByText(quiz.questions[1].question)).toBeInTheDocument();
  });

  it("updates score and displays final score when quiz is finished", async () => {
    renderQuiz([
      {
        question: "Test question",
        options: ["first option"],
        answer: "first option",
      },
    ]);

    await userEvent.click(screen.getByText(/first option/i));
    await userEvent.click(screen.getByRole("button", { name: /submit answer/i }));
    const finishQuizButton = screen.getByRole("button", { name: /finish quiz/i });
    expect(finishQuizButton).toBeInTheDocument();
    await userEvent.click(finishQuizButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText(/out of 1/i)).toBeInTheDocument();
  });
  it("doesn't update score but displays final score when quiz is finished", async () => {
    renderQuiz([
      {
        question: "Test question",
        options: ["wrong", "correct"],
        answer: "correct",
      },
    ]);
    await userEvent.click(screen.getByText(/wrong/i));
    await userEvent.click(screen.getByRole("button", { name: /submit answer/i }));
    const finishQuizButton = screen.getByRole("button", { name: /finish quiz/i });
    expect(finishQuizButton).toBeInTheDocument();
    await userEvent.click(finishQuizButton);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText(/out of 1/i)).toBeInTheDocument();
  });
  it("checks if user cannot change answer after submitting", async () => {
    renderQuiz([
      {
        question: "Test question",
        options: ["wrong", "correct"],
        answer: "correct",
      },
    ]);

    const wrongAnswer = screen.getByText(/wrong/i);

    await userEvent.click(screen.getByText(/correct/i));
    await userEvent.click(screen.getByRole("button", { name: /submit answer/i }));
    await userEvent.click(wrongAnswer);
    expect(wrongAnswer).not.toHaveClass("border-purple");
  });
});
