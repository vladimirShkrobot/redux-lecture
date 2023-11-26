import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userList: []
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		selectUser: (state, action) => {
			state.userList.forEach(user => {
				if (user.id === action.payload) {
					user.selected = true;
				} else {
					user.selected = false;
				}
			})
		},
		setUsers: (state, action) => {
			state.userList = action.payload;
		}
	}
})

export const { selectUser, setUsers } = userSlice.actions;
export default userSlice.reducer;