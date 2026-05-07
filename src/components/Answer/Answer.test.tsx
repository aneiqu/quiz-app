import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Answer from ".";

describe("Answer", () => {
  const renderAnswer = ({
    letter = "A",
    answer = "Example answer",
    index = 0,
    selected = undefined,
    correct = undefined,
    wrong = undefined,
    submitted = false,
    select = vi.fn(),
  }: Partial<React.ComponentProps<typeof Answer>> = {}) => {
    render(
      <Answer
        letter={letter}
        answer={answer}
        index={index}
        selected={selected}
        correct={correct}
        wrong={wrong}
        submitted={submitted}
        select={select}
      />,
    );
  };

  it("renders with correct data", () => {
    renderAnswer();
    expect(screen.getByRole("button", { name: /example answer/i })).toBeInTheDocument();
  });

  it("doesn't update if answer is submitted", async () => {
    const mockFunction = vi.fn();
    renderAnswer({ submitted: true, select: mockFunction });
    await userEvent.click(screen.getByRole("button", { name: /example answer/i }));
    expect(mockFunction).not.toHaveBeenCalled();
  });

  it("selects its own index", async () => {
    const select = vi.fn();

    renderAnswer({ index: 2, select });
    await userEvent.click(screen.getByRole("button", { name: /example answer/i }));

    expect(select).toHaveBeenCalledWith(2);
  });

  it("shows selected state", () => {
    renderAnswer({ index: 1, selected: 1 });

    expect(screen.getByRole("button", { name: /example answer/i })).toHaveClass("border-purple");
    expect(screen.getByText("A")).toHaveClass("bg-purple");
  });

  it("shows correct answer icon", () => {
    renderAnswer({ index: 0, selected: 0, correct: 0 });

    expect(screen.getByAltText(/correct answer/i)).toBeInTheDocument();
  });

  it("shows incorrect answer icon", () => {
    renderAnswer({ index: 0, selected: 0, wrong: 0 });

    expect(screen.getByAltText(/incorrect answer/i)).toBeInTheDocument();
  });
});
