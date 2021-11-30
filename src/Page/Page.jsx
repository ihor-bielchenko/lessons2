import React from 'react';
import Messenges from '../Messenges';
import Sidebar from '../Sidebar';
import Textarea from '../Textarea';

let Page = () => {
	const [ data, setData ] = React.useState(() => ({

		currentContact: Number(window.location.pathname.replaceAll('/', '')),

		selected: [],

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
	}));
	console.log('selected', data.selected.length)

	return data.currentContact >= 0
		? <React.Fragment>
			<Sidebar 
				data={data}
				setData={setData} />
			<Messenges 
				data={data}
				setData={setData} />
			<Textarea 
				editIndex={data.editIndex}
				setData={setData}
				selectedLength={data.selected.length} />
		</React.Fragment>
		: <div>
			страница не найдена
		</div>;
};
Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;
