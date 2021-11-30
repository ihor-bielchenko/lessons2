import React from 'react';
import styled from 'styled-components';
import onSend from './onSend.js';
import onCancel from './onCancel.js';
import onDeleteAll from './onDeleteAll.js';

const DivWrapper = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	width: calc(100% - 280px);

	& > div {
		position: relative;
		overflow: hidden;
		text-align: right;

		& > textarea {
			width: 100%;
			padding: 0;
			border: 2px solid #dddddd;
		}
		& > button {
			font-size: 28px;
		}
	}
`;



let Textarea = ({ 
	editIndex, 
	setData,
	selectedLength,
}) => {
	console.log('selectedLength', selectedLength)

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
				{editIndex >= 0
					? <button onClick={onCancel(setData)}>
						<span>
						cancel
						</span>
					</button>
					: <React.Fragment />}	
				{selectedLength > 0
					? <button onClick={onDeleteAll(setData)}>
						<span>
						deleteAll
						</span>
					</button>
					: <React.Fragment />}
			</div>
		</DivWrapper>
	</React.Fragment>;
};

Textarea = React.memo(Textarea);
Textarea.defaultProps = {
};

export default Textarea;
