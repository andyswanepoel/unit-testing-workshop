const UserTile = ({ name, image, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name + " profile picture"} />
      <p>Email: {email}</p>
      <p>Age: {age} years</p>
    </div>
  );
};

export default UserTile;
