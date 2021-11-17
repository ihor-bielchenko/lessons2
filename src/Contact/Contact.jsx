import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
	display: flex;
	align-items: center;
	font-family: arial;
	cursor: pointer;

	&:hover {
		background-color: red;
	}

	& > div {
		padding: 14px;
	}
	& img {
		width: 48px;
		height: 48px;
	}
`;
let Contact = ({ name, avatar }) => {
	return <React.Fragment>
		<DivWrapper>
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
