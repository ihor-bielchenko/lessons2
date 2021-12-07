import Store from '../components/Store';

const onRemove = (e, index) => {
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
			currentState.data[currentState.currentContact].messanges.splice(index, 1);

			return { ...currentState };
		}
	});

};

export default onRemove;
