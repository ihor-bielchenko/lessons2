import React from 'react';
import styled from 'styled-components';
import Contact from '../Contact';

const DivWrapper = styled.div`
	width: 280px;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: #DDD;
`;

let Sidebar = () => {
	const [ contacts ] = React.useState(() => [{
		id: 1,
		name: 'John',
		avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
	}, {
		id: 2,
		name: 'Bob',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
	}, {
		id: 3,
		name: 'Monika',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
	}, {
		id: 4,
		name: 'David',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png',
	}]);
	const collector = [];

	for (let i = 0; i < contacts.length; i++) {
		collector.push(<Contact 
			key={contacts[i].id}
			name={contacts[i].name}
			avatar={contacts[i].avatar} />); 
	}
	
	return <React.Fragment>
		<DivWrapper>
			{collector}
		</DivWrapper>
	</React.Fragment>;
};

Sidebar = React.memo(Sidebar);
Sidebar.defaultProps = {
};

export default Sidebar;
