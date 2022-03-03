import "./App.css";
import { useEffect, useState } from "react";
import { daysUntilBirthday } from "./daysUntilBirthday";
import UserTile from "./components/UserTile";

function App() {
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [sortAsc, setSortAsc] = useState(null);

  const handleSort = () => {
    if (sortAsc === null) {
      setSortAsc(true);
    } else {
      setSortAsc((prevState) => !prevState);
    }
  };

  const sortByName = (a, b) => {
    if (sortAsc === true) {
      return a.name > b.name ? 1 : -1;
    }
    if (sortAsc === false) {
      return a.name > b.name ? -1 : 1;
    }
    return 0;
  };

  const sortedUsers = [].concat(users).sort(sortByName);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          data.results.map((u) => ({
            id: u.login.uuid,
            name: `${u.name.first} ${u.name.last}`,
            age: u.dob.age,
            dob: u.dob.date,
            image: u.picture.large,
            email: u.email,
          }))
        );
        setUsersLoaded(true);
      })
      .catch((err) => {
        setUsersLoaded(true);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button disabled={usersLoaded && users.length === 0} onClick={handleSort}>
        Sort By Name
      </button>
      {!usersLoaded && <p>Loading users...</p>}
      {usersLoaded && users.length === 0 && <p>No users found</p>}
      {usersLoaded && users.length > 0 && (
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            textAlign: "center",
            listStyleType: "none",
            padding: 0,
          }}
        >
          {sortedUsers.map((u) => (
            <li style={{ padding: "10px" }} key={u.id}>
              <UserTile
                name={u.name}
                image={u.image}
                age={u.age}
                email={u.email}
                days={daysUntilBirthday(u.dob)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
