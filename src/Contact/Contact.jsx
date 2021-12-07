import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Store from '../components/Store';
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
	index,
}) => {
	const name = useSelector((currentState)=> currentState.contacts.data[index].name);
	const avatar = useSelector((currentState)=> currentState.contacts.data[index].avatar);
	const isActive = useSelector((currentState)=> currentState.contacts.currentContact === index);
	const _onContact = React.useCallback((e) => onContact(e, index), [
		index,
	]);

	/*// onMount
	React.useEffect(() => {
		setTimeout(() => {
			console.log('===========');
		}, 2000);
	}, [
	]);

	// onUnmount
	React.useEffect(() => () => {
		console.log('????????1');
	}, [
	]);*/

	return <React.Fragment>
		<DivWrapper 
			onClick={_onContact}
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
