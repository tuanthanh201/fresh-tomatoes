import { AppDispatch } from '../index';
import axios, { AxiosError } from 'axios';
import { showNotification } from '../ui/actions';
import { saveUser, setLoading } from './authSlice';

const url = 'http://localhost:8000';

interface RegisterParams {
	email: string;
	username: string;
	password: string;
	profile: string;
}

interface LoginParams {
	email: string;
	password: string;
}

export const register = (body: RegisterParams) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post(`${url}/api/users/register`, body);
			localStorage.setItem('token', response.data.token);
			dispatch(saveUser(response.data.user));
			dispatch(
				showNotification({
					status: 'success',
					msg: 'Registered successfully 🎊',
				})
			);
		} catch (error: any) {
			if (error instanceof AxiosError) {
				const errors = error.response?.data.errors ?? [];
				errors.forEach((e: any) =>
					dispatch(
						showNotification({
							status: 'error',
							msg: e.msg ?? 'Failed to register 😢',
						})
					)
				);
			} else {
				dispatch(
					showNotification({
						status: 'error',
						msg: error.message ?? 'Failed to register 😢',
					})
				);
			}
		}
	};
};

export const login = (body: LoginParams) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.post(`${url}/api/users/login`, body);
			localStorage.setItem('token', response.data.token);
			dispatch(saveUser(response.data.user));
			dispatch(
				showNotification({
					status: 'success',
					msg: 'Login successfully 🎊',
				})
			);
		} catch (error: any) {
			if (error instanceof AxiosError) {
				const errors = error.response?.data.errors ?? [];
				errors.forEach((e: any) =>
					dispatch(
						showNotification({
							status: 'error',
							msg: e.msg ?? 'Failed to login 😢',
						})
					)
				);
			} else {
				dispatch(
					showNotification({
						status: 'error',
						msg: error.message ?? 'Failed to login 😢',
					})
				);
			}
		}
	};
};

export const getMyProfile = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(setLoading(true));
		try {
			const token = localStorage.getItem('token');
			if (token) {
				const response = await axios.get(`${url}/api/users/profile`, {
					headers: {
						'x-auth-token': token,
					},
				});
				dispatch(saveUser(response.data));
			}
		} catch (error: any) {
			localStorage.removeItem('token');
			if (error instanceof AxiosError) {
				const errors = error.response?.data.errors ?? [];
				errors.forEach((e: any) =>
					dispatch(
						showNotification({
							status: 'error',
							msg: e.msg ?? 'Failed to login 😢',
						})
					)
				);
			} else {
				dispatch(
					showNotification({
						status: 'error',
						msg: error.message ?? 'Failed to login 😢',
					})
				);
			}
		}
		dispatch(setLoading(false));
	};
};
