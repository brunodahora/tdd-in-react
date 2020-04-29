import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("renders a To-Do input", () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Add a to-do")).toBeInTheDocument();
  });
});
