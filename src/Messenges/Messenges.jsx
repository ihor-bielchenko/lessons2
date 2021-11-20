import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
	position: absolute;
	width: calc(100% - 280px);
	right: 0;
`

let Messenges = ({ data }) => {
	// console.log('data1', data);
	const collector = [];

	for (let i = 0; i < data.length; i++) {
		collector.push(<div key={i}>
			<p>
				{data[i]}
			</p>
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
