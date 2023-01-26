import { useState } from 'react';

const useInput = (
	validateValue: (value: string) => boolean,
	initValue: string
) => {
	const [value, setValue] = useState(initValue ? initValue : '');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(value);
	const valueIsInvalid = !valueIsValid && isTouched;

	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const valueBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setValue(initValue ? initValue : '');
		setIsTouched(false);
	};

	return {
		value: value,
		valueIsValid,
		valueIsInvalid,
		valueChangeHandler,
		valueBlurHandler,
		reset,
	};
};

export default useInput;
