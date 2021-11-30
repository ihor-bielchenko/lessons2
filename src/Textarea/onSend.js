
const onSend = (setMessenges) => (e) => {
	const textarea = document.getElementById('textarea-messenges');
	const value = textarea.value;

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
	textarea.value = '';
};

export default onSend;
