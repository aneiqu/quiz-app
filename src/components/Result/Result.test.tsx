import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Result from ".";

describe("Result", () => {
  const resultState = {
    icon: "/icon-html.svg",
    title: "HTML",
    color: "#FFF1E9",
    score: 7,
    maxScore: 10,
  };

  const renderResult = () =>
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/result/html",
            state: resultState,
          },
        ]}
      >
        <Routes>
          <Route path='/result/:title' Component={Result} />
        </Routes>
      </MemoryRouter>,
    );

  it("renders the quiz result from router state", () => {
    renderResult();

    expect(screen.getByText("Quiz completed")).toBeInTheDocument();
    expect(screen.getByText("You scored...")).toBeInTheDocument();
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText(/out of 10/i)).toBeInTheDocument();
  });

  it("links back to the home screen", () => {
    renderResult();

    expect(screen.getByRole("link", { name: /play again/i })).toHaveAttribute("href", "/");
  });
});
