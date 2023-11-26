const UserItem = ({ user, selectUser }) => {

	const handleClick = () => {
		selectUser(user.id);
	}

	return (
		<div onClick={handleClick} style={{ color: user.selected ? 'red' : 'black' }}>{user.name}</div>
	);
};

export default UserItem;
