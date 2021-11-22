
const onEdit = (setMessenges, index) => (e) => {
	const textarea = document.getElementById('textarea-messenges');

	setMessenges((currentState) => {
		textarea.value = currentState.data[currentState.currentContact].messanges[index];

		currentState['editIndex'] = index;
		return currentState;
	});
};

export default onEdit;

