import { AppDispatch } from '../index';
import axios, { Axios, AxiosError } from 'axios';
import { showNotification } from '../ui/actions';
import { saveUser } from './authSlice';

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
