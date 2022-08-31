import Child from "../child/Child";
import "./Parent.css";
import { useState } from "react";

function Parent() {

  const [ userLogIn,  setUserLogIn ] = useState(false);

  const [array, setArray] = useState([
    { id: 1, name: "armaz", lastname: "avaliani", age: 20 },
    { id: 2, name: "gvanca", lastname: "beridze", age: 19 },
    { id: 3, name: "luka", lastname: "osashvili", age: 20 },
    { id: 4, name: "shako", lastname: "siordia", age: 31 },
  ]);

  const handeFill = () => {
    setArray([
      { id: 1, name: "armaz", lastname: "avaliani", age: 20 },
      { id: 2, name: "gvanca", lastname: "beridze", age: 19 },
      { id: 3, name: "luka", lastname: "osashvili", age: 20 },
      { id: 4, name: "shako", lastname: "siordia", age: 31 },
    ]);
  };
  return (
    <div className="parent-wrapper">
      <div className="userIntoText">
        <h1>
          {array[0] === undefined
            ? 'Userlist is Empty Click on "fill users" to Fill the userlist '
            : "UserList is filled"}
        </h1>
      </div>

      <div className="parent">
        {array.map((item) => {
          return <Child userLogIn={userLogIn} key={item.id} user={item} />;
        })}
      </div>

      <div className="parent-buttons">
        <button className="parent-btn" onClick={() => setUserLogIn(!userLogIn)}>
          {" "}
          {userLogIn === true ? "log out" : "log in"}{" "}
        </button>
        <button className="parent-btn" onClick={() => setArray([])}>
          {" "}
          Clear users{" "}
        </button>
        <button className="parent-btn" onClick={handeFill}>
          Fill users{" "}
        </button>
      </div>
    </div>
  );
}

export default Parent;
