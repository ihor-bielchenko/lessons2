const projects = [{
	id: 1,
	name: 'project1',
}, {
	id: 4,
	name: 'project4',
}];

const columns = {
	1: [{
		id: 1,
		name: 'column1',
	}],
	4: [{
		id: 1,
		name: 'column1',
	}]
};

export const initialState = () => ({

		currentContact: Number(window.location.pathname.replaceAll('/', '')),

		selected: [],

		editIndex: undefined,

		data: [{
			id: 1,
			name: 'John',
			avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
			messanges: [],
		}, {
			id: 2,
			name: 'Bob',
			avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
			messanges: [],
		}, {
			id: 3,
			name: 'Monika',
			avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
			messanges: [],
		}, {
			id: 4,
			name: 'David',
			avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
			messanges: [],
		}],
	});

const contacts = (currentState = initialState(), action) => {
	return (action.type === 'contacts')
		? action.payload()
		: currentState;

};

export	default contacts;