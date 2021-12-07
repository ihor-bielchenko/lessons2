import Store from '../components/Store';

const onChange = (e, index) =>  {
	const newValue = e.currentTarget.checked;
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
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
		}
	});
}

export default onChange;