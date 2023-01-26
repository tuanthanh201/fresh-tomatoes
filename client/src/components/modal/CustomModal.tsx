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
	initialFocusRef?: React.MutableRefObject<null>;
}

const CustomModal = (props: CustomModalProps) => {
	const { header, isOpen, onClose, body, footer, initialFocusRef } = props;
	return (
		<Modal initialFocusRef={initialFocusRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				{body ? <ModalBody pb={6}>{body}</ModalBody> : null}
				{footer ? <ModalFooter>{footer}</ModalFooter> : null}
			</ModalContent>
		</Modal>
	);
};

export default CustomModal;
