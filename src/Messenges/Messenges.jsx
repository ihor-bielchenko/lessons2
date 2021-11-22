import React from 'react';
import styled from 'styled-components';
import onRemove from './onRemove.js';
import onEdit from './onEdit.js';

const DivWrapper = styled.div`
	position: absolute;
	width: calc(100% - 280px);
	right: 0;
`

let Messenges = ({ 
	data,
	setMessenges, 
}) => {
	const collector = [];

	for (let i = 0; i < data.length; i++) {
		collector.push(<div key={i}>
			<p>
				{data[i]}
			</p>
			<button onClick={onRemove(setMessenges, i)}>
				delete
			</button>
			<button onClick={onEdit(setMessenges, i)}>
				edit
			</button>
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
