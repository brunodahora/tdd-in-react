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

  it("marks a To-Do as completed", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("Add a to-do"), {
      target: { value: "Buy groceries" },
    });
    fireEvent.submit(getByPlaceholderText("Add a to-do"));
    fireEvent.click(getByText("Complete"));
    expect(queryByText("Complete")).toBeNull();
    expect(getByText("Buy groceries")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  it("deletes a To-Do", () => {
    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
      queryByText,
    } = render(<App />);
    fireEvent.change(getByPlaceholderText("Add a to-do"), {
      target: { value: "Buy groceries" },
    });
    fireEvent.submit(getByPlaceholderText("Add a to-do"));
    expect(
      getByTextInContainer(getByTestId("todo-list"), "Buy groceries")
    ).toBeInTheDocument();
    fireEvent.click(getByText("x"));
    expect(queryByText("Buy groceries")).toBeNull();
  });
});
