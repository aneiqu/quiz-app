import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ThemeSwitch from ".";

describe("Theme switcher", () => {
  it.afterEach(() => {
    localStorage.clear();
  });
  it("checks if theme switch button renders", () => {
    render(<ThemeSwitch />);
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });

  it("checks if button reacts for user click", async () => {
    render(<ThemeSwitch />);
    expect(localStorage.getItem("theme")).toBe("light");
    await userEvent.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
