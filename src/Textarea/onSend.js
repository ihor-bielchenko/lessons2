import Store from '../components/Store';

const onSend = (e) => {
	const textarea = document.getElementById('textarea-messenges');
	const value = textarea.value;
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
			if (currentState['editIndex'] >= 0) {
				currentState.data[currentState.currentContact].messanges[currentState['editIndex']] = value;
				delete currentState.editIndex;
			}
			else {
				currentState.data[currentState.currentContact].messanges.push(value);
			}
			currentState.data[currentState.currentContact].messanges = [ ...currentState.data[currentState.currentContact].messanges ];
			return { ...currentState };
		},
	});
	textarea.value = '';
};

export default onSend;
