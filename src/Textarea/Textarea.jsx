import React from 'react';
import styled from 'styled-components';
import onSend from './onSend.js';
import onCancel from './onCancel.js';
import onDeleteAll from './onDeleteAll.js';
import Store from '../components/Store';
import { useSelector } from 'react-redux';

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


				/*editIndex={data.editIndex}
				setData={setData}
				selectedLength={data.selected.length} */

let Textarea = () => {

	const editIndex = useSelector((currentState)=> currentState.contacts.editIndex);
	const selectedLength = useSelector((currentState)=> currentState.contacts.selected.length);
	const _onSend = React.useCallback((e) => onSend(e, editIndex), [
		editIndex,
	]);
	const _onCancel = React.useCallback((e) => onCancel(e, editIndex), [
		editIndex,
	]);
	const _onDeleteAll = React.useCallback((e) => onDeleteAll(e, editIndex), [
		editIndex,
	]);

	return <React.Fragment>
		<DivWrapper>
			<div>
				<textarea 
					id="textarea-messenges"
					rows={8}>
				</textarea>
				<button onClick={_onSend}>
					<span>
					send
					</span>
				</button>
				{editIndex >= 0
					? <button onClick={_onCancel}>
						<span>
						cancel
						</span>
					</button>
					: <React.Fragment />}	
				{selectedLength > 0
					? <button onClick={_onDeleteAll}>
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
