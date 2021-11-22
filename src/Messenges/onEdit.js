
const onEdit = (setMessenges, index) => (e) => {
	const textarea = document.getElementById('textarea-messenges');

	setMessenges((currentState) => {
		textarea.value = currentState[index];

		currentState['editIndex'] = index;
		return currentState;
	});
};

export default onEdit;

