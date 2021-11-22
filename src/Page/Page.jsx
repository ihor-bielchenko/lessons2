import React from 'react';
import Messenges from '../Messenges';
import Sidebar from '../Sidebar';
import Textarea from '../Textarea';

let Page = () => {
	const [ messenges, setMessenges ] = React.useState(() => []);

	return <React.Fragment>
		<Sidebar />
		<Messenges 
			data={messenges}
			setMessenges={setMessenges} />
		<Textarea setMessenges={setMessenges} />
	</React.Fragment>;
};
Page = React.memo(Page);
Page.defaultProps = {
};

export default Page;
