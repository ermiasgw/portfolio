import { screen, render, fireEvent } from "@testing-library/react";
import Header from "@/components/header";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Footer from "@/components/footer";
import LandingPage from "@/app/(landing)/page";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render Header componenet correnctly", () => {
    expect(screen.getByText("ermias-gashaw")).toBeInTheDocument();
    expect(screen.getByText("_about-me")).toBeInTheDocument();
    expect(screen.getByText("_projects")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render Header componenet correnctly", () => {
    expect(screen.getByText("Find me in:")).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBe(6);
  });
});

describe("landing page", () => {
  test("should render all elements", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Ermias Gashaw/)).toBeInTheDocument();
    expect(screen.getByText(/Hi all. I am/)).toBeInTheDocument();
    expect(screen.getByText(/Full-stack/)).toBeInTheDocument();
    expect(screen.getByText(/complete the game/)).toBeInTheDocument();
    expect(screen.getByText(/ermiasgw/)).toBeInTheDocument();
  });
});
