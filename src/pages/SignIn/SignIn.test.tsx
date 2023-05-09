import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "./SignIn";
import TestingWrapper from "../../utils/TestUtils/TestUtils";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("SignIn", () => {
  it("Render any text in SignIn page", () => {
    render(
      <TestingWrapper>
        <SignIn />
      </TestingWrapper>,
    );
    const myElement = screen.getByRole("textbox", { name: "Email" });
    expect(myElement).toBeInTheDocument();
  });
  test("Password Is Invalid", () => {
    render(
      <TestingWrapper>
        <SignIn />
      </TestingWrapper>,
    );

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "hjbfg" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Email or Password is Incorrect!"),
    ).toBeInTheDocument();
  });

  it("should render the book shelves page after clicking sign in button", () => {
    render(
      <TestingWrapper>
        <SignIn />
      </TestingWrapper>,
    );
    const mockJson = { email: "email", username: "ss", password: "12345" };
    window.localStorage.account = JSON.stringify(mockJson);
    fireEvent.change(screen.getByPlaceholderText("Enter your email"), {
      target: { value: mockJson.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: mockJson.password },
    });

    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
});
