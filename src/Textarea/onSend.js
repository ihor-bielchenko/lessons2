
const onSend = (setMessenges) => (e) => {
	const value = e.currentTarget.previousElementSibling.value;

	setMessenges((currentState) => {
		currentState.push(value);

		console.log('currentState', currentState);
		return [ ...currentState ];
	});
};

export default onSend;
