import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RecipeSearchPage from "../page";

describe("Recipe Search Page", () => {
  it("should work with dynamic route segments", () => {
    render(<RecipeSearchPage params={{ slug: "Test" }} />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Results for Test");
  });
});
