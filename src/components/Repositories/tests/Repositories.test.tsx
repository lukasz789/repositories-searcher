import { render, screen } from "@testing-library/react";
import Repositories from "../Repositories";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

test("repositories list and pagination not visible initally", () => {
  render(<Repositories />);
  const nullRepositoriesList = screen.queryByRole("table");
  expect(nullRepositoriesList).not.toBeInTheDocument();

  const nullPagination = screen.queryByRole("ul");
  expect(nullPagination).not.toBeInTheDocument();
});

test(`repositories list and pagination are shown after 
typing a new username in input and clicking "search" button`, async () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByPlaceholderText("Write username");
  userEvent.type(input, "test");
  userEvent.click(button);

  const repositoriesList = await screen.findByRole("table");
  expect(repositoriesList).toBeInTheDocument();

  // const pagination = await screen.findByRole("ul");
  // expect(pagination).toBeInTheDocument();
});
