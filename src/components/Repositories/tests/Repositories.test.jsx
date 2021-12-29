import { render, screen, waitFor } from "@testing-library/react";
import Repositories from "../Repositories";
import userEvent from "@testing-library/user-event";
import App from "../../../App";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("repositories table and pagination are not visible initally", () => {
  render(<Repositories />);
  const nullRepositoriesList = screen.queryByRole("table", {
    name: "repo-table",
  });
  expect(nullRepositoriesList).not.toBeInTheDocument();

  const nullPagination = screen.queryByRole("list");
  expect(nullPagination).not.toBeInTheDocument();
});

test(`repositories table and pagination are shown after 
typing a new username in input and clicking "search" button`, async () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByPlaceholderText("Write username");
  userEvent.type(input, "test");
  userEvent.click(button);

  const repositoriesList = await screen.findByRole("table", {
    name: "repo-table",
  });
  expect(repositoriesList).toBeInTheDocument();

  const pagination = await screen.findByRole("list");
  expect(pagination).toBeInTheDocument();
});

test("correct number of tablerows appear on new user search", async () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByPlaceholderText("Write username");
  userEvent.type(input, "test");
  userEvent.click(button);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("row");
    expect(alerts).toHaveLength(12); //with table header
  });
});

test("showing modal-error if server responded with status 500", async () => {
  server.resetHandlers(
    rest.get(
      `https://api.github.com/search/repositories?q=user:test&sort=stars&order=desc&per_page=11&page=1`,
      (req, res, ctx) => rest(ctx.status(500))
    )
  );

  render(<App />);
  const button = screen.getByRole("button", { name: "Search" });
  const input = screen.getByPlaceholderText("Write username");
  userEvent.type(input, "test");
  userEvent.click(button);

  await waitFor(async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(1);
  });
});
