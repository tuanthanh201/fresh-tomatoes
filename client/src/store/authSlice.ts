import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
	uuid: string;
	username: string;
	email: string;
	role: 'User' | 'Admin' | '';
	profile: string | null;
}

const initialState: Auth = {
	uuid: '',
	username: '',
	email: '',
	role: '',
	profile: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveUser: (state, { payload }: PayloadAction<Auth>) => {
			state.uuid = payload.uuid;
			state.username = payload.username;
			state.email = payload.email;
			state.role = payload.role;
			state.profile = payload.profile;
		},
		clearUser: (state) => {
			state.uuid = '';
			state.username = '';
			state.email = '';
			state.role = '';
			state.profile = '';
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
