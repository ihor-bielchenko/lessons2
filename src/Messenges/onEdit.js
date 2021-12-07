import Store from '../components/Store';

const onEdit = (e, index) => {
	const textarea = document.getElementById('textarea-messenges');
	const currentState = Store().getState().contacts;

		Store().dispatch({
			type: 'contacts',
			payload: () => {
				textarea.value = currentState.data[currentState.currentContact].messanges[index];
				currentState['editIndex'] = index;

			return { ...currentState };
		}
	});
};

export default onEdit;

