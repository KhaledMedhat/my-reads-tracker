import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import TestingWrapper from "../../utils/TestUtils/TestUtils";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SignUp", () => {
  it("Render any text in SignUp page", () => {
    render(
      <TestingWrapper>
        <SignUp />
      </TestingWrapper>,
    );
    const myElement = screen.getByRole("textbox", { name: "Email" });
    expect(myElement).toBeInTheDocument();
  });
  test("data is added into local storage", () => {
    render(
      <TestingWrapper>
        <SignUp />
      </TestingWrapper>,
    );
    const mockId = "1";
    const mockJson = { data: "json data" };
    fireEvent.click(screen.getByRole("button", { name: "SignUp" }));
    window.localStorage.setItem(mockId, JSON.stringify(mockJson));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test("should render the sign in page after clicking sign up button", () => {
    render(
      <TestingWrapper>
        <SignUp />
      </TestingWrapper>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/SignIn");
  });
});
