import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("User list", () => {
  test("should display list of users when fetched correctly", () => {
    render(<App />);
    screen.getAllByAltText(/profile picture/gi);
  });

  test("should display 'No users found' when list is empty", () => {
    render(<App />);
    screen.getByText(/no users found/i);
  });
  test("should display 'No users found' when api call fails", () => {
    render(<App />);
    screen.getByText(/no users found/i);
  });
});
