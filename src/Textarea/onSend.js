
const onSend = (setMessenges) => (e) => {
	const value = e.currentTarget.previousElementSibling.value;

	setMessenges((currentState) => {
		if (currentState['editIndex'] >= 0) {
			currentState.data[currentState.currentContact].messanges[currentState['editIndex']] = value;
			delete currentState.editIndex;
		}
		else {
			currentState.data[currentState.currentContact].messanges.push(value);
		}
		return { ...currentState };
	});
	e.currentTarget.previousElementSibling.value = '';
};

export default onSend;
