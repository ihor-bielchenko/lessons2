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
	}]);

	return <React.Fragment>
		<DivWrapper>
			{[
				<Contact 
					key={0}
					name="John"
					avatar="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" />,
				<Contact 
					key={10}
					name="Bob"
					avatar="https://upload.wikimedia.org/wikipedia/commons/b/bf/Avast_Mobile_Security_%26_Antivirus.png" />,
			]}
		</DivWrapper>
	</React.Fragment>;
};

Sidebar = React.memo(Sidebar);
Sidebar.defaultProps = {
};

export default Sidebar;
