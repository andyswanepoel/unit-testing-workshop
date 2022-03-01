import { render, screen } from "@testing-library/react";
import App from "../App";

global.fetch = jest.fn();

// Don't need the full response, just the data we use
const mockSuccessResponse = {
  results: [
    {
      name: { title: "Mr", first: "Allen", last: "Wilson" },
      email: "allen.wilson@example.com",
      login: {
        uuid: "0f2604c9-9b0d-4482-8bfb-3141ea90f31d",
      },
      dob: { date: "1949-11-21T18:18:50.297Z", age: 73 },
      picture: {
        large: "https://randomuser.me/api/portraits/men/8.jpg",
      },
    },
    {
      name: { title: "Mr", first: "Otto", last: "Heinonen" },
      email: "otto.heinonen@example.com",
      login: {
        uuid: "ecf8c293-32a3-461c-a090-b0fb2e1235c8",
      },
      dob: { date: "1977-02-07T19:18:52.061Z", age: 45 },
      picture: {
        large: "https://randomuser.me/api/portraits/men/23.jpg",
      },
    },
    {
      name: { title: "Mrs", first: "Mercedes", last: "Carrasco" },
      email: "mercedes.carrasco@example.com",
      login: {
        uuid: "19935134-28aa-4623-8789-7fa6fa28e3be",
      },
      dob: { date: "1955-04-18T08:21:46.246Z", age: 67 },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
      },
    },
    {
      name: { title: "Mr", first: "Carter", last: "Côté" },
      email: "carter.cote@example.com",
      login: {
        uuid: "cff8cc8c-f05f-43ac-ae4d-c4087c4e5c19",
      },
      dob: { date: "1994-07-19T01:08:06.425Z", age: 28 },
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    },
    {
      name: { title: "Mr", first: "Charlie", last: "Hughes" },
      email: "charlie.hughes@example.com",
      login: {
        uuid: "6ff9ab62-633b-4b28-a3b9-0b9d920dc1e6",
      },
      dob: { date: "1995-06-28T20:22:50.933Z", age: 27 },
      picture: {
        large: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    },
  ],
};

const mockEmptyResponse = { results: [] };

describe("User list", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("should display list of users when fetched correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockSuccessResponse) })
    );
    render(<App />);
    const users = await screen.findAllByAltText(/profile picture/);
    expect(users).toHaveLength(5);
  });

  test("should display 'No users found' when list is empty", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockEmptyResponse) })
    );
    render(<App />);
    expect(await screen.findByText(/no users found/i)).toBeInTheDocument();
  });

  test("should display 'No users found' when api call fails", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failed"));
    render(<App />);
    expect(await screen.findByText(/no users found/i)).toBeInTheDocument();
  });
});

describe("User list sorting", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("should be sorted in ascending order when sort button is clicked", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockSuccessResponse) })
    );
    render(<App />);

    const users = await screen.findAllByRole("heading", { level: 2 });
    const userNames = users.map((user) => user.textContent);
    const sortedUserNames = userNames.map((x) => x).sort();
    expect(userNames).toEqual(sortedUserNames);
  });

  test("should be sorted in descending order when sort button is clicked twice", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockSuccessResponse) })
    );
    render(<App />);

    const users = await screen.findAllByRole("heading", { level: 2 });
    const userNames = users.map((userName) => userName.textContent);
    const sortedUserNames = userNames
      .map((x) => x)
      .sort()
      .reverse();
    expect(userNames).toEqual(sortedUserNames);
  });
});
