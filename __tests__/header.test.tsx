import { screen, render, fireEvent } from "@testing-library/react";
import Header from "@/components/header";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Footer from "@/components/footer";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render Header componenet correnctly", () => {
    expect(screen.getByText("ermias-gashaw")).toBeInTheDocument();
    expect(screen.getByText("_about-me")).toBeInTheDocument();
    expect(screen.getByText("_projects")).toBeInTheDocument();
    expect(screen.getByText("_contact-me")).toBeInTheDocument();
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
