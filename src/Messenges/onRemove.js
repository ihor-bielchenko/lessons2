
const onRemove = (setMessenges, index) => (e) => {
	setMessenges((currentState) => {
		currentState.splice(index, 1);

		return [ ...currentState ];
	});
};

export default onRemove;
