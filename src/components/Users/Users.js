import { useEffect, useState } from "react";

import { UserComp } from "../UserComp/UserComp";
import { UsersCount } from "../UsersCount/UsersCount";

import "./Users.css";

const generateUsers = () => {
  return [
    { id: 1, name: "armaz", lastname: "avaliani", age: 20 },
    { id: 2, name: "gvanca", lastname: "beridze", age: 19 },
    { id: 3, name: "luka", lastname: "devdariani", age: 20 },
    { id: 4, name: "nukri", lastname: "qurdiani", age: 21 },
    { id: 5, name: "shako", lastname: "siordia", age: 27 },
    { id: 6, name: "tornike", lastname: "goradze", age: 29 },
    { id: 7, name: "tiko", lastname: "kaxidze", age: 32 },
    { id: 8, name: "giorgi", lastname: "kalashovi", age: 34 },
    { id: 9, name: "temo", lastname: "klidiashvili", age: 30 },
    { id: 10, name: "dali", lastname: "davitadze", age: 22 },
  ];
};

const Users = () => {
  const [users, SetUsers] = useState([]);
  const [usersCount, SetUsersCount] = useState(0);

  const handleRandom = () => {
    let n = Math.floor(Math.random() * users.length);
    SetUsers(users.filter((item, index) => index !== n));
    SetUsersCount((prev) => prev - 1);
    console.log("random", n);
  };

  useEffect(() => {
    SetUsers(generateUsers());
    SetUsersCount(10);
    console.log("didmount");
  }, []);

  return (
    <div className="users">
      <UsersCount userslist={users} />

      {users && <UserComp users={users} counter={usersCount} />}

      <button className="btn btn-delete" onClick={handleRandom}>
        Delete Random User
      </button>
    </div>
  );
};

export default Users;
