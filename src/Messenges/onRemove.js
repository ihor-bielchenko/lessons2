
const onRemove = (setMessenges, index) => (e) => {
	setMessenges((currentState) => {
		currentState.data[currentState.currentContact].messanges.splice(index, 1);

		return { ...currentState };
	});
};

export default onRemove;
