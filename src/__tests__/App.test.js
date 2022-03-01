import { render, screen } from "@testing-library/react";
import App from "../App";

global.fetch = jest.fn();
const mockSuccessResponse = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Allen", last: "Wilson" },
      location: {
        street: { number: 3969, name: "Albert Road" },
        city: "Cork",
        state: "Sligo",
        country: "Ireland",
        postcode: 64006,
        coordinates: { latitude: "21.3259", longitude: "-26.2116" },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "allen.wilson@example.com",
      login: {
        uuid: "0f2604c9-9b0d-4482-8bfb-3141ea90f31d",
        username: "yellowpanda322",
        password: "reebok",
        salt: "LTc1sGjc",
        md5: "f59dca3d19159decaa099ed5b21efa77",
        sha1: "e9b519e054681e4aaaedfccf3a6e352872fd475b",
        sha256:
          "fc8efc868fec88bd5ff254e7e5dd20a330e219080985d9011def857015b4ec2e",
      },
      dob: { date: "1949-11-21T18:18:50.297Z", age: 73 },
      registered: { date: "2007-06-04T08:10:04.314Z", age: 15 },
      phone: "071-650-9218",
      cell: "081-728-7957",
      id: { name: "PPS", value: "1622162T" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      },
      nat: "IE",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Otto", last: "Heinonen" },
      location: {
        street: { number: 5979, name: "Aleksanterinkatu" },
        city: "Rauma",
        state: "Central Finland",
        country: "Finland",
        postcode: 97672,
        coordinates: { latitude: "42.7356", longitude: "-101.3702" },
        timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
      },
      email: "otto.heinonen@example.com",
      login: {
        uuid: "ecf8c293-32a3-461c-a090-b0fb2e1235c8",
        username: "brownelephant164",
        password: "lions",
        salt: "Rk4fknwW",
        md5: "933b3b08e3a4db6f61208209feaa3eaf",
        sha1: "320039fd08867fdb43094dd0be49cda8aa3eed58",
        sha256:
          "55e89d98237e2cf0b1a2deca6e7809441331ba309d9cebd3a6598b660650f1ea",
      },
      dob: { date: "1977-02-07T19:18:52.061Z", age: 45 },
      registered: { date: "2012-12-22T22:15:41.688Z", age: 10 },
      phone: "04-022-156",
      cell: "046-312-84-55",
      id: { name: "HETU", value: "NaNNA497undefined" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
      },
      nat: "FI",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Mercedes", last: "Carrasco" },
      location: {
        street: { number: 2469, name: "Calle de Ángel García" },
        city: "Valencia",
        state: "Navarra",
        country: "Spain",
        postcode: 49937,
        coordinates: { latitude: "-49.6010", longitude: "-91.3727" },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "mercedes.carrasco@example.com",
      login: {
        uuid: "19935134-28aa-4623-8789-7fa6fa28e3be",
        username: "angryfrog979",
        password: "wannabe",
        salt: "X00IVVGV",
        md5: "b12e84eef9aa94f66db2f2ff00184945",
        sha1: "7819dd8fed881ac869f6bccc681ed80107943e9f",
        sha256:
          "6ebabeeef87f94b643f0b3e914bfc436ec67dd230d6755129da5cfe8e3f81436",
      },
      dob: { date: "1955-04-18T08:21:46.246Z", age: 67 },
      registered: { date: "2013-04-06T18:26:14.614Z", age: 9 },
      phone: "998-287-205",
      cell: "647-293-705",
      id: { name: "DNI", value: "70499667-L" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Carter", last: "Côté" },
      location: {
        street: { number: 7134, name: "Alfred St" },
        city: "Kingston",
        state: "British Columbia",
        country: "Canada",
        postcode: "B5Y 2I3",
        coordinates: { latitude: "64.9494", longitude: "-20.2510" },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "carter.cote@example.com",
      login: {
        uuid: "cff8cc8c-f05f-43ac-ae4d-c4087c4e5c19",
        username: "ticklishrabbit179",
        password: "1201",
        salt: "UJdSK2Lh",
        md5: "fd308f4ddf3e6c13e997188c378e5f62",
        sha1: "ab2acf23dbd8d6b01033c4c20a977e04f15c0cfb",
        sha256:
          "d3c3c743b784eda91cb56a86e5b460b58afe2ccfdb9ea5c237e14f92138e3859",
      },
      dob: { date: "1994-07-19T01:08:06.425Z", age: 28 },
      registered: { date: "2009-08-01T19:22:11.552Z", age: 13 },
      phone: "024-408-6246",
      cell: "782-490-6945",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
      },
      nat: "CA",
    },
    {
      gender: "male",
      name: { title: "Mr", first: "Charlie", last: "Hughes" },
      location: {
        street: { number: 7956, name: "Main North Road" },
        city: "Hamilton",
        state: "Gisborne",
        country: "New Zealand",
        postcode: 68413,
        coordinates: { latitude: "50.2276", longitude: "-157.3567" },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "charlie.hughes@example.com",
      login: {
        uuid: "6ff9ab62-633b-4b28-a3b9-0b9d920dc1e6",
        username: "bigpeacock929",
        password: "yahoo",
        salt: "PBARk9Nt",
        md5: "bee51f21e3aee997eeea59fb99400376",
        sha1: "27815ca5d592ce6fbcd3b26f0508a92edf1240b9",
        sha256:
          "61d78c1b447b0dfb8e16d39e14cb8710c907e5056cc2a300e6b55d014965dce7",
      },
      dob: { date: "1995-06-28T20:22:50.933Z", age: 27 },
      registered: { date: "2010-10-20T00:20:07.277Z", age: 12 },
      phone: "(489)-650-1397",
      cell: "(408)-975-7317",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/10.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
      },
      nat: "NZ",
    },
  ],
};

const mockEmptyResponse = { results: [] };

describe("User list", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("should display list of users when fetched correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockSuccessResponse) })
    );
    render(<App />);
    await screen.findAllByAltText(/profile picture/gi);
  });

  test("should display 'No users found' when list is empty", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve(mockEmptyResponse) })
    );
    render(<App />);
    await screen.findByText(/no users found/i);
  });

  test("should display 'No users found' when api call fails", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failed"));
    render(<App />);
    await screen.findByText(/no users found/i);
  });
});
