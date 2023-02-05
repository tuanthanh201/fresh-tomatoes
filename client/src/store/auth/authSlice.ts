import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
	uuid: string;
	username: string;
	email: string;
	role: 'User' | 'Admin' | '';
	profile: string | null;
	isAuthenticated: boolean;
	loading: boolean;
}

const initialState: Auth = {
	uuid: '',
	username: '',
	email: '',
	role: '',
	profile: '',
	isAuthenticated: false,
	loading: false,
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
			state.isAuthenticated = true;
		},
		clearUser: (state) => {
			state.uuid = '';
			state.username = '';
			state.email = '';
			state.role = '';
			state.profile = '';
			state.isAuthenticated = false;
		},
		setLoading(state, { payload }: PayloadAction<boolean>) {
			state.loading = payload;
		},
	},
});

export const { saveUser, clearUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
