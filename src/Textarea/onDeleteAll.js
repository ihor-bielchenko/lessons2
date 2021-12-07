import Store from '../components/Store';

const onDeleteAll = (e) => {
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
			currentState.selected.forEach((currentIndex) => {
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
		}
	});
}

export default onDeleteAll;