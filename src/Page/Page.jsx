import React from 'react';
import { useSelector } from 'react-redux';
import Messenges from '../Messenges';
import Sidebar from '../Sidebar';
import Textarea from '../Textarea';

let Page = () => {
	const data = useSelector((currentState)=> currentState.contacts);

	console.log('selected', data);

	/*return data.currentContact >= 0
		? <React.Fragment>
			<Sidebar 
				data={data}
				setData={setData} />
			<Messenges 
				data={data}
				setData={setData} />
			<Textarea 
				editIndex={data.editIndex}
				setData={setData}
				selectedLength={data.selected.length} />
		</React.Fragment>
		: <div>
			страница не найдена
		</div>;*/
		return <React.Fragment />;
};
Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;
