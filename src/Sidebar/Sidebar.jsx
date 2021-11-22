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

let Sidebar = ({ 
	data,
	setData, 
}) => {
	const collector = [];

	for (let i = 0; i < data.data.length; i++) {
		collector.push(<Contact 
			key={data.data[i].id}
			name={data.data[i].name}
			avatar={data.data[i].avatar}
			isActive={data.currentContact === i}
			index={i}
			setData={setData} />); 
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
