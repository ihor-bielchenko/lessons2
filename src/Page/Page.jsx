import React from 'react';
import { useSelector } from 'react-redux';
import Messenges from '../Messenges';
import Sidebar from '../Sidebar';
import Textarea from '../Textarea';

let Page = () => {
	const data = useSelector((currentState)=> currentState.contacts);

	return data.currentContact >= 0
		? <React.Fragment>
			<Sidebar />
			<Messenges />
			<Textarea />
		</React.Fragment>
		: <div>
			страница не найдена
		</div>;
};
Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;
