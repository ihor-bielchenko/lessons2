import React from 'react';
import styled from 'styled-components';
import onSend from './onSend.js';

const DivWrapper = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	width: calc(100% - 280px);

	& > div {
		position: relative;
		overflow: hidden;

		& > textarea {
			width: 100%;
			padding: 0;
			margin: 0 0 44px;
			border: 2px solid #dddddd;
		}
		& > button {
			position: absolute;
			bottom: 0px;
			font-size: 28px;
			right: 0;
		}
	}
`;

let Textarea = ({ setData }) => {
	return <React.Fragment>
		<DivWrapper>
			<div>
				<textarea 
					id="textarea-messenges"
					rows={8}>
				</textarea>
				<button onClick={onSend(setData)}>
					<span>
					send
					</span>
				</button>
			</div>
		</DivWrapper>
	</React.Fragment>;
};

Textarea = React.memo(Textarea);
Textarea.defaultProps = {
};

export default Textarea;
