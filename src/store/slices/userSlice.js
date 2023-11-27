import { createSlice } from '@reduxjs/toolkit';
import { getUsersRequest } from '../thunks/userThunks';

const initialState = {
	list: [],
	loading: false,
	error: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		selectUser: (state, action) => {
			state.list.forEach(user => {
				if (user.id === action.payload) {
					user.selected = true;
				} else {
					user.selected = false;
				}
			})
		},
	},
	extraReducers: {
		[getUsersRequest.fulfilled.type]: (state, action) => {
			state.list = action.payload;
			state.loading = false;
		},
		[getUsersRequest.pending.type]: (state) => {
			state.loading = true;
		},
		[getUsersRequest.rejected.type]: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		}
	}
})

export const { selectUser } = userSlice.actions;
export default userSlice.reducer;