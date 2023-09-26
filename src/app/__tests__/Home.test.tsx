import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { FilterProps } from "@/types";

const fakeSearchParams: FilterProps = {
  search: "",
  kitchenType: "",
  categories: "",
  limit: 0,
};

describe("Home page", () => {
  it('should have text "Recipes"', () => {
    render(<Home searchParams={fakeSearchParams} />); // Arrange

    const elem = screen.getByRole("heading", {
      name: "Recipes",
    });

    expect(elem).toBeInTheDocument();
  });
});
