import { fireEvent, render, screen } from "@testing-library/react";
import Shelf from "./Shelf";
import TestingWrapper from "../../utils/TestUtils/TestUtils";

describe("Shelf", () => {
  it("Render any text in shelf page", () => {
    render(
      <TestingWrapper>
        <Shelf
          id="1234"
          title="asdsad"
          authors={["asdsad"]}
          shelf="asdsadsad"
          image="asdsad"
          shelfTitle="asdsad"
        />
      </TestingWrapper>,
    );
    const myElement = screen.getByRole("option", { name: "Want to read" });
    expect(myElement).toBeInTheDocument();
  });
  it("Render option", () => {
    render(
      <TestingWrapper>
        <Shelf
          id="1234"
          title="asdsad"
          authors={["asdsad"]}
          shelf="asdsadsad"
          image="asdsad"
          shelfTitle="asdsad"
        />
      </TestingWrapper>,
    );
    fireEvent.change(screen.getByPlaceholderText("select"), {
      target: { value: "read" },
    });

    expect(screen.getByPlaceholderText("select")).toHaveValue("read");
  });
});
