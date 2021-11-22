
const onSend = (setMessenges) => (e) => {
	const value = e.currentTarget.previousElementSibling.value;

	setMessenges((currentState) => {
		if (currentState['editIndex'] >= 0) {
			currentState[currentState['editIndex']] = value;
			delete currentState.editIndex;
		}
		else {
			currentState.push(value);
		}
		return [ ...currentState ];
	});
	e.currentTarget.previousElementSibling.value = '';
};

export default onSend;
