import React from 'react';
import styled from 'styled-components';
import onRemove from './onRemove.js';
import onEdit from './onEdit.js';
import onChange from './onChange.js';
import { useSelector } from 'react-redux';
import Store from '../components/Store';

const DivWrapper = styled.div`
	position: absolute;
	height: calc(100% - 200px);
	width: calc(100% - 280px);
	overflow: auto;
	right: 0;
`;

let Messange = ({
	index,
}) => {
	const value = useSelector((currentState)=> currentState.contacts.data[currentState.contacts.currentContact].messanges[index]);
	const _onRemove = React.useCallback((e) => onRemove(e, index), [
		index,
	]);
	const _onEdit = React.useCallback((e) => onEdit(e, index), [
		index,
	]);
	const _onChange = React.useCallback((e) => onChange(e, index), [
		index,
	]);

	return <div>
		<p>
			{value}
		</p>
		<button onClick={_onRemove}>
			delete
		</button>
		<button onClick={_onEdit}>
			edit
		</button>
		<input type="checkbox" onChange={_onChange}/>
	</div>;
};
Messange = React.memo(Messange);
Messange.defaultProps = {
};

let Messenges = () => { 
	const messanges = useSelector((currentState)=> currentState.contacts.data[currentState.contacts.currentContact].messanges);

	return <React.Fragment>
		<DivWrapper>
		{messanges
			.map((item, i) => {
				return <Messange
					key={i}
					index={i} />;
			})}
		</DivWrapper>
	</React.Fragment>;
};

Messenges = React.memo(Messenges);
Messenges.defaultProps = {
};

export default Messenges;
