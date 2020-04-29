import React from "react";
import {
  render,
  fireEvent,
  getByText as getByTextInContainer,
} from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("renders a To-Do input", () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Add a to-do")).toBeInTheDocument();
  });

  it("adds a To-Do when inputing a text", () => {
    const { getByPlaceholderText, getByTestId } = render(<App />);
    fireEvent.change(getByPlaceholderText("Add a to-do"), {
      target: { value: "Buy groceries" },
    });
    fireEvent.submit(getByPlaceholderText("Add a to-do"));
    expect(
      getByTextInContainer(getByTestId("todo-list"), "Buy groceries")
    ).toBeInTheDocument();
  });
});
