import React from 'react';

let Textarea = () => {
	return <React.Fragment>
		Textarea
	</React.Fragment>;
};

Textarea = React.memo(Textarea);
Textarea.defaultProps = {
};

export default Textarea;
