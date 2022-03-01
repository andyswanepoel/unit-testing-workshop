const UserTile = ({ name, image, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name + " profile picture"} />
      <p>
        <strong>Email:</strong> <br />
        {email}
      </p>
      <p>
        <strong>Age:</strong> <br />
        {age} years
      </p>
    </div>
  );
};

export default UserTile;
