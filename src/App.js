import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import UserTile from "./components/UserTile";

function App() {
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          data.results.map((u) => ({
            id: u.login.uuid,
            name: `${u.name.first} ${u.name.last}`,
            age: u.dob.age,
            image: u.picture.large,
            email: u.email,
          }))
        );
        setUsersLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setUsersLoaded(true);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button>Sort By Name</button>
      {!usersLoaded && <p>Loading users...</p>}
      {usersLoaded && users.length === 0 && <p>No users found</p>}
      {usersLoaded && users.length > 0 && (
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          {users.map((u) => (
            <li key={u.id}>
              <UserTile
                name={u.name}
                image={u.image}
                age={u.age}
                email={u.email}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
