import React from 'react';
import styled from 'styled-components';
import onRemove from './onRemove.js';
import onEdit from './onEdit.js';
import onChange from './onChange.js';

const DivWrapper = styled.div`
	position: absolute;
	height: calc(100% - 200px);
	width: calc(100% - 280px);
	overflow: auto;
	right: 0;
`

let Messenges = ({ 
	data,
	setData, 
}) => {

	return <React.Fragment>
		<DivWrapper>
		{data
			.data[data.currentContact]
			.messanges
			.map((item, i) => {
				return <div key={i}>
					<p>
						{item}
					</p>
					<button onClick={onRemove(setData, i)}>
						delete
					</button>
					<button onClick={onEdit(setData, i)}>
						edit
					</button>
					<input type="checkbox" onChange={onChange(setData, i)}/>

				</div>;
			})}
		</DivWrapper>
	</React.Fragment>;
};

Messenges = React.memo(Messenges);
Messenges.defaultProps = {
};

export default Messenges;
