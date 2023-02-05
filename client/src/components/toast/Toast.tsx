import { useColorModeValue } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import { useAppSelector } from '../../hooks/useRedux';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
	const { notifications } = useAppSelector((state) => state.ui);

	notifications.forEach((noti) => {
		switch (noti.status) {
			case 'success':
				toast.success(noti.msg, {
					toastId: noti.uuid,
				});
				break;
			case 'error':
				toast.error(noti.msg, {
					toastId: noti.uuid,
				});
				break;
			case 'info':
				toast.info(noti.msg, {
					toastId: noti.uuid,
				});
				break;
			case 'warning':
				toast.warning(noti.msg, {
					toastId: noti.uuid,
				});
				break;
			default:
				toast(noti.msg, {
					toastId: noti.uuid,
				});
				break;
		}
	});

	return (
		<ToastContainer
			autoClose={2000}
			position='bottom-right'
			theme={useColorModeValue('light', 'dark')}
		/>
	);
};

export default Toast;
