import React from 'react';
import styled from 'styled-components';
import onRemove from './onRemove.js';
import onEdit from './onEdit.js';
import onChange from './onChange.js';

const DivWrapper = styled.div`
	position: absolute;
	width: calc(100% - 280px);
	right: 0;
`

let Messenges = ({ 
	data,
	setData, 
}) => {
	const collector = [];

	for (let i = 0; i < data.data[data.currentContact].messanges.length; i++) {
		collector.push(<div key={i}>
			<p>
				{data.data[data.currentContact].messanges[i]}
			</p>
			<button onClick={onRemove(setData, i)}>
				delete
			</button>
			<button onClick={onEdit(setData, i)}>
				edit
			</button>
			<input type="checkbox" onChange={onChange}/>

		</div>);
	}

	return <React.Fragment>
		<DivWrapper>
			{collector}
		</DivWrapper>
	</React.Fragment>;
};

Messenges = React.memo(Messenges);
Messenges.defaultProps = {
};

export default Messenges;
