
const onContact = (setData, index) => (e) => {
	setData((currentState) => {
		currentState.currentContact = index;

		return { ...currentState };
	});
};

export default onContact;
