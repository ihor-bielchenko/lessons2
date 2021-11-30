
const onCancel = (setMessenges) => (e) => {
	const textarea = document.getElementById('textarea-messenges');

	setMessenges((currentState) => {
		delete currentState['editIndex'];

		textarea.value = '';
		return { ...currentState };
	});
};

export default onCancel;
