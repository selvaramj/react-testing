import React from "react";
import Application from "./application";
import { render, screen } from "@testing-library/react";

describe("Application component validation", () => {
  it("To make sure the necessary fields are present in the form by the role", () => {
    // render the component
    render(<Application />);

    // heading validation
    const formHeading = screen.getByRole("heading", { level: 1 });
    expect(formHeading).toBeInTheDocument();

    // section heading validation
    const sectionHeading = screen.getByRole("heading", { level: 6 });
    expect(sectionHeading).toBeInTheDocument();

    // paragragh validation
    const paragraphElement = screen.getByText("All the fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
    // paragragh validation by custom test attribute
    const paragraphElement1 = screen.getByTestId("para");
    expect(paragraphElement1).toBeInTheDocument();
    // paragraph element validated by substring
    // const paragrapghElement2 = screen.getByText("manadatory", { exact: false });
    // expect(paragrapghElement2).toBeInTheDocument();
    // paragraph element validated by reg match
    const paragrapghElement3 = screen.getByText(/manadatory/i);
    expect(paragrapghElement3).toBeInTheDocument();

    // validations - name field
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();
    // validations - name field
    const nameElement2 = screen.getByLabelText("Last name");
    expect(nameElement2).toBeInTheDocument();
    // last name field validation
    const lastNameElement = screen.getByPlaceholderText("enter your last name");
    expect(lastNameElement).toBeInTheDocument();
    // vlidate the last name field with value
    const lastNameField = screen.getByDisplayValue("jayakumar");
    expect(lastNameField).toBeInTheDocument();
    // validate the image by alt attribute
    const imgElement = screen.getByAltText("dummy-image");
    expect(imgElement).toBeInTheDocument();
    // validate the image by alt attribute
    const imgElement1 = screen.getByTitle("dummy image");
    expect(imgElement1).toBeInTheDocument();
    // Bio textarea - validation
    const textAreaElement = screen.getByRole("textbox", { name: "Bio" });
    expect(textAreaElement).toBeInTheDocument();
    // combo box validation
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    // checkbox validation
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
    // button validation
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
