import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CustomModalProps {
	header: string;
	body?: ReactNode;
	footer?: ReactNode;
	// onOpen: () => void;
	onClose: () => void;
	isOpen: boolean;
	size?:
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| 'full'
		| 'xs'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl';
	initialFocusRef?: React.MutableRefObject<null>;
}

const CustomModal = (props: CustomModalProps) => {
	const { header, size, isOpen, onClose, body, footer, initialFocusRef } =
		props;
	return (
		<Modal
			size={size}
			initialFocusRef={initialFocusRef}
			isOpen={isOpen}
			onClose={onClose}
			scrollBehavior='inside'
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				{body ? <ModalBody>{body}</ModalBody> : null}
				{footer ? <ModalFooter>{footer}</ModalFooter> : null}
			</ModalContent>
		</Modal>
	);
};

export default CustomModal;
