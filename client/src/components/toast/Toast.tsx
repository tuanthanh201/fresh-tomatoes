import { useColorModeValue } from '@chakra-ui/react';
import { toast, ToastContainer } from 'react-toastify';
import { useAppSelector } from '../../hooks/useRedux';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
	const { notifications } = useAppSelector((state) => state.ui);

	notifications.forEach((noti) => {
		if (noti.status === 'error') {
			toast.error(noti.msg);
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
