import "./Child.css";

function Child({ user, userLogIn }) {
  return (
    <div className="userlist">
      {userLogIn === false ? (
        <h1>Not logged in</h1>
      ) : (
        <div className="div">
          <p className="username"> Username: {user.name}</p>
          <p>LastName: {user.lastname}</p>
          <p>age: {user.age} </p>
        </div>
      )}

     
    </div>
  );
}

export default Child;
