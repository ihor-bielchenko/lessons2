import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Store from '../components/Store';
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
	const data = useSelector((currentState)=> currentState.contacts);

	// onMount
	/*React.useEffect(() => {
		setTimeout(() => {
			const contacts = Store().getState().contacts;

			contacts.data[2].name = 'ashndfuiHDUHUIAWHDUHAWU';

			Store().dispatch({
				type: 'contacts',
				payload: () => ({ ...contacts }),
			});

			console.log('===========');
		}, 3000);
	}, [

	]);*/

	return <React.Fragment>
		<DivWrapper>
			{data.data.map((item, i) => {
				return <Contact 
					key={item.id}
					index={i} />;
			})}
		</DivWrapper>
	</React.Fragment>;
};

Sidebar = React.memo(Sidebar);
Sidebar.defaultProps = {
};

export default Sidebar;
