import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import Homescreen from ".";

describe("Homescreen", () => {
  it("renders a homescreen", () => {
    render(
      <MemoryRouter>
        <Homescreen />
      </MemoryRouter>,
    );

    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Accessibility")).toBeInTheDocument();
  });
});
