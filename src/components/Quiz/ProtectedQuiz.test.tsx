import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { quizzes } from "../../data/data.json";
import ProtectedQuiz from "./protected";

describe("Protected route", () => {
  const quiz = quizzes[0];
  it("Should redirect to '/' when entered without state", () => {
    render(
      <MemoryRouter initialEntries={["/quiz/html"]}>
        <Routes>
          <Route path='/' element={<p>Home page</p>} />
          <Route path='/quiz/:title' Component={ProtectedQuiz} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
  it("Should redirect to '/quiz/*' when entered with state", () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/quiz/html",
            state: {
              icon: quiz.icon,
              title: quiz.title,
              color: quiz.color,
              data: [
                {
                  question: "Quiz page",
                  options: [],
                  answer: "",
                },
              ],
            },
          },
        ]}
      >
        <Routes>
          <Route path='/' element={<p>Home page</p>} />
          <Route path='/quiz/:title' Component={ProtectedQuiz} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("Quiz page")).toBeInTheDocument();
  });
});
