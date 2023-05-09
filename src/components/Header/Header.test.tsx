import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import TestingWrapper from "../../utils/TestUtils/TestUtils";
describe("Header", () => {
  it("render any text in header", () => {
    render(
      <TestingWrapper>
        <Header />
      </TestingWrapper>,
    );
    const myElement = screen.getByText("My-Reads");
    expect(myElement).toBeInTheDocument();
  });
  it("Local storage deletion", () => {
    render(
      <TestingWrapper>
        <Header />
      </TestingWrapper>,
    );
    const mockId = "";
    const mockJson = { data: "" };
    fireEvent.click(screen.getByRole("link", { name: "Log out" }));
    window.localStorage.setItem(mockId, JSON.stringify(mockJson));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});
