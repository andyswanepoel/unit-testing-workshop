const UserTile = ({ name, image, age, email, days }) => {
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
      <p>Next birthday: {days} days</p>
    </div>
  );
};

export default UserTile;
