import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";

test("button is disabled initially", () => {
  render(<Form />);
  const button = screen.getByRole("button", { name: "Search" });
  expect(button).toHaveClass("disabled");
});

test("button is enabled if input is not empty and disabled if input is set to empty", () => {
  render(<Form />);
  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByPlaceholderText("Write username");
  fireEvent.change(input, { target: { value: "t" } });
  expect(button).not.toHaveClass("disabled");

  fireEvent.change(input, { target: { value: "" } });
  expect(button).toHaveClass("disabled");
});

test("h1 element visible", () => {
  render(<Form />);
  const h1 = screen.getByRole("heading", {
    name: /find the most popular repositories by a user!/i,
  });

  expect(h1).toBeInTheDocument();
});
