import Store from '../components/Store';

const onContact = (e, index) => {
	const currentState = Store().getState().contacts;

	Store().dispatch({
		type: 'contacts',
		payload: () => {
			currentState.currentContact = index;

			return { ...currentState };
		}
	});
};

export default onContact;
