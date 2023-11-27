import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getUsersRequest = createAsyncThunk(
	'user/getAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			return response.data;
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue('произошла ошибка');
		}
	}
)