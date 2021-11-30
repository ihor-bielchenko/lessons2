
const onChange = (setMessenges, index) => (e) =>  {
	const newValue = e.currentTarget.checked;

	setMessenges((currentState) => {
		if (newValue) {
			currentState.selected.push(index);
		}
		else {
			const indexOf = currentState.selected.indexOf(index);

			if (indexOf > -1) {
				currentState.selected.splice(indexOf, 1);
			}
		}
		return { ...currentState };
	});
	
	

	
	

}

export default onChange;