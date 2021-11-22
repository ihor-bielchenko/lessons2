import React from 'react';
import styled from 'styled-components';
import onContact from './onContact.js';

const DivWrapper = styled.div`
	display: flex;
	align-items: center;
	font-family: arial;
	cursor: pointer;

	&:hover {
		background-color: blue !important;
	}

	& > div {
		padding: 14px;
	}
	& img {
		width: 48px;
		height: 48px;
	}
`;

let Contact = ({ 
	name, 
	avatar,
	isActive, 
	index,
	setData,
}) => {
	return <React.Fragment>
		<DivWrapper 
			onClick={onContact(setData, index)}
			style={{
				backgroundColor: isActive
					? 'red'
					: 'initial',
			}}>
			<div>
				<img 
					src={avatar}
					alt="avatar" />
			</div>
			<div>
				{name}
			</div>
		</DivWrapper>
	</React.Fragment>;
};

Contact = React.memo(Contact);
Contact.defaultProps = {
};

export default Contact;
