import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import useInput from '../../hooks/useInput';
import { useAppDispatch } from '../../store';
import { login } from '../../store/auth/actions';
import CustomModal from '../modal/CustomModal';

const validateEmail = (email: string) => {
	return !!String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const Login = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);
	const dispatch = useAppDispatch();

	const {
		value: email,
		valueChangeHandler: emailChangeHandler,
		valueBlurHandler: emailBlurHandler,
		valueIsInvalid: emailIsInvalid,
		valueIsValid: emailIsValid,
	} = useInput(validateEmail, '');
	const {
		value: password,
		valueChangeHandler: passwordChangeHandler,
		valueBlurHandler: passwordBlurHandler,
		valueIsInvalid: passwordIsInvalid,
		valueIsValid: passwordIsValid,
	} = useInput((value) => value !== '', '');

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const formIsValid = emailIsValid && passwordIsValid;
		if (formIsValid) {
			dispatch(login({ email, password }));
		} else {
			console.error('Invalid form');
		}
	};

	return (
		<Box mr='1rem'>
			<Button onClick={onOpen}>Login</Button>
			<CustomModal
				header='Login'
				isOpen={isOpen}
				onClose={onClose}
				body={
					<>
						<FormControl isInvalid={emailIsInvalid} isRequired>
							<FormLabel>Email</FormLabel>
							<Input
								type='email'
								value={email}
								ref={initialRef}
								placeholder='Email'
								onChange={emailChangeHandler}
								onBlur={emailBlurHandler}
							/>
							<FormErrorMessage>Invalid email</FormErrorMessage>
						</FormControl>

						<FormControl mt={4} isInvalid={passwordIsInvalid} isRequired>
							<FormLabel>Password</FormLabel>
							<Input
								type='password'
								value={password}
								placeholder='Password'
								onChange={passwordChangeHandler}
								onBlur={passwordBlurHandler}
							/>
							<FormErrorMessage>Invalid password</FormErrorMessage>
						</FormControl>
					</>
				}
				footer={
					<>
						{/* TODO: disable login when form is invalid (?) */}
						<Button onClick={onClose} mr={3}>
							Cancel
						</Button>
						<Button colorScheme='blue' onClick={submitHandler}>
							Login
						</Button>
					</>
				}
				initialFocusRef={initialRef}
			/>
		</Box>
	);
};

export default Login;
