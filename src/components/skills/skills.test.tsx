import Skills from "./skills";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Testing the Skill component", () => {
  const skills = ["html", "css", "js"];
  it("To render the component", () => {
    render(<Skills skills={skills} />);
    const unorderList = screen.getByRole("list");
    expect(unorderList).toBeInTheDocument();
  });
  it("To render the skills component with listitems", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });
});
