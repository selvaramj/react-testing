import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";
import React from "react";

describe("Testing counter component", () => {
  it("render the counter component with initial state", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading", { level: 3 });
    expect(headingElement).toBeInTheDocument();

    // button validation
    const btn = screen.getByRole("button", { name: "increment" });
    expect(btn).toBeInTheDocument();
  });

  it("render the counter with increment one", async () => {
    user.setup();
    render(<Counter />);
    // default zero
    const headingWithCountZero = screen.getByText("count: 0");
    expect(headingWithCountZero).toBeInTheDocument();
    // fire the increment button
    const incrementBtn = screen.getByRole("button", { name: "increment" });
    await user.click(incrementBtn, {});
    const incrementedHeading = screen.getByText("count: 1");
    expect(incrementedHeading).toBeInTheDocument();
  });

  it("render the counter with set input value", async () => {
    // input and button validation
    user.setup();
    render(<Counter />);
    const inputBtnElement = screen.getByRole("button", { name: "Set" });
    expect(inputBtnElement).toBeInTheDocument();
    const inputFieldElement = screen.getByRole("textbox");
    expect(inputFieldElement).toBeInTheDocument();
    await user.type(inputFieldElement, "10");
    expect(inputFieldElement).toHaveValue("10");
    await user.click(inputBtnElement);
    const incrementedHeading = screen.getByText("count: 10");
    expect(incrementedHeading).toBeInTheDocument();
  });
});
