import { useEffect, useState } from "react";
import ReduxUserItem from "../components/ReduxUserItem";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../store/userSlice";

function Users() {
  const users = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(
      setUsers([
        { name: "petya", id: 1 },
        { name: "petya", id: 2 },
        { name: "petya", id: 3 },
        { name: "petya", id: 4 },
      ])
    );
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ReduxUserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
