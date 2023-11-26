import { useState } from 'react';
import UserItem from '../components/UserItem';

function Users() {
  const [users, setUsers] = useState([
    { name: 'petya', id: 1 },
    { name: 'petya', id: 2 },
    { name: 'petya', id: 3 },
    { name: 'petya', id: 4 },
  ])

  const selectUser = (userid) => {
    setUsers(users.map(user => {
      if (userid === user.id) {
        return { ...user, selected: true }
      } else {
        return { ...user, selected: false }
      }
    }))
  }
  console.log(users)
  return (
    <div>
      {users.map(user => (
        <UserItem key={user.id} selectUser={selectUser} user={user} />
      ))}
    </div>
  );
}

export default Users;
