import React from 'react';
import { render } from 'react-dom';
import Messenges from './Messenges';
import Sidebar from './Sidebar';
import Textarea from './Textarea';

render(<React.Fragment>
	<Messenges />
	<Sidebar />
	<Textarea />
</React.Fragment>, document.getElementById('root'));
