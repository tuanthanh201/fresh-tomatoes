import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import useInput from '../../hooks/useInput';
import CustomModal from '../modal/CustomModal';

const validateEmail = (email: string) => {
	return !!String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

const Register = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);

	const {
		value: email,
		valueChangeHandler: emailChangeHandler,
		valueBlurHandler: emailBlurHandler,
		valueIsInvalid: emailIsInvalid,
		valueIsValid: emailIsValid,
	} = useInput(validateEmail, '');
	const {
		value: username,
		valueChangeHandler: usernameChangeHandler,
		valueBlurHandler: usernameBlurHandler,
		valueIsInvalid: usernameIsInvalid,
		valueIsValid: usernameIsValid,
	} = useInput((value) => value !== '', '');
	const {
		value: password,
		valueChangeHandler: passwordChangeHandler,
		valueBlurHandler: passwordBlurHandler,
		valueIsInvalid: passwordIsInvalid,
		valueIsValid: passwordIsValid,
	} = useInput((value) => value !== '', '');
	const {
		value: profile,
		valueChangeHandler: profileChangeHandler,
		valueBlurHandler: profileBlurHandler,
		valueIsInvalid: profileIsInvalid,
		valueIsValid: profileIsValid,
	} = useInput((value) => value !== '', '');

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const formIsValid =
			emailIsValid && usernameIsValid && passwordIsValid && profileIsValid;
		if (formIsValid) {
			// TODO: handle authentication
			console.log({
				email,
				username,
				password,
			});
		} else {
			console.error('Invalid form');
		}
	};

	return (
		<Box mr='1rem'>
			<Button onClick={onOpen}>Register</Button>
			<CustomModal
				header='Register'
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

						<FormControl isInvalid={usernameIsInvalid} isRequired>
							<FormLabel>Username</FormLabel>
							<Input
								type='username'
								value={username}
								placeholder='Username'
								onChange={usernameChangeHandler}
								onBlur={usernameBlurHandler}
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

						<FormControl mt={4} isInvalid={profileIsInvalid} isRequired>
							<FormLabel>Profile</FormLabel>
							<Textarea
								value={profile}
								onChange={profileChangeHandler}
								onBlur={profileBlurHandler}
								placeholder='A few things about yourself...'
								size='sm'
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
							Register
						</Button>
					</>
				}
				initialFocusRef={initialRef}
			/>
		</Box>
	);
};

export default Register;
