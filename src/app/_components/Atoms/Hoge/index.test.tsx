import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hoge from "./index";

describe("Hoge", () => {
  it("Element", () => {
    render(<Hoge />);
    const Element = screen.getByText("Hoge");
    expect(Element).toBeInTheDocument();
  });
});