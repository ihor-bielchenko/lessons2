import Store from '../components/Store';

const onCancel = (e) => {
	const textarea = document.getElementById('textarea-messenges');
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
			delete currentState['editIndex'];

			textarea.value = '';
			return { ...currentState };
		}
	});
};

export default onCancel;
