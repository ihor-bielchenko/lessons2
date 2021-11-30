
const onDeleteAll = (setMessenges, index) => (e) => {

	setMessenges((currentState) => {
		console.log('currentState.selected', [ ...currentState.selected ]);
		currentState.selected.forEach((currentIndex) => {
			// currentState.data[currentState.currentContact].messanges.splice(currentIndex, 1);
			delete currentState.data[currentState.currentContact].messanges[currentIndex];
		});
		currentState.data[currentState.currentContact].messanges = currentState
			.data[currentState.currentContact]
			.messanges
			.filter((item) => item
				? item
				: false);
		currentState.selected = [];

		return { ...currentState };
	})


}

export default onDeleteAll;