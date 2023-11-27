import { useEffect, useState } from "react";
import ReduxUserItem from "../components/ReduxUserItem";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../store/thunks/userThunks";

function Users() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  if (!!user.error) return <h1>{user.error}</h1>;

  if (user.loading) return <h1>Loading...</h1>;

  return (
    <div>
      {user.list.map((user) => (
        <ReduxUserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
