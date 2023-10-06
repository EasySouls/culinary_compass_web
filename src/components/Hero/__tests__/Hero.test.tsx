import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

describe("Hero section", () => {
  it("should render two headings", () => {
    render(<Hero />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(2);
  });
});
