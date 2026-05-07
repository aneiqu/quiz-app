import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProtectedResult from "./protected";

describe("Protected route", () => {
  it("Should redirect to '/' when entered without state", () => {
    render(
      <MemoryRouter>
        <ProtectedResult />
      </MemoryRouter>,
    );
    expect(location.pathname.includes("/result")).toBe(false);
  });
});
