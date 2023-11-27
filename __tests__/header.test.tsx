import { screen, render } from "@testing-library/react";
import Header from "@/components/header";
import "@testing-library/jest-dom";

describe("Home page", () => {
  it("should render Header componenet correnctly", () => {
    render(<Header />);
    const logo = screen.getByText("ermias-gashaw");
    expect(logo).toBeInTheDocument();
  });
});
