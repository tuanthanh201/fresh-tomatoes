import { v4 as uuidv4 } from 'uuid';
import { AppDispatch } from './../index';
import { removeNotification, addNotification } from './uiSlice';

export const showNotification = ({
	status,
	msg,
}: {
	status: 'success' | 'error' | 'warning' | 'info';
	msg: string;
}) => {
	return (dispatch: AppDispatch) => {
		const uuid = uuidv4();
		const notification = { uuid, status, msg };
		dispatch(addNotification(notification));
		setTimeout(() => dispatch(removeNotification(uuid)), 100);
	};
};
