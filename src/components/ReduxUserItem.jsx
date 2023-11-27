import { useDispatch } from "react-redux";
import { selectUser } from "../store/slices/userSlice";


const UserItem = ({ user }) => {
	const dispatch = useDispatch();
	
	const handleClick = () => {
		dispatch(selectUser(user.id));
	}

	return (
		<div onClick={handleClick} style={{ color: user.selected ? 'red' : 'black' }}>{user.name}</div>
	);
};

export default UserItem;
