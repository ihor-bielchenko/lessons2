import React from 'react';

var even = true;
const onClick = (action) => {
	return () => {
		if (even){
		action(600);
		even = false;
		} else {
			action(200);
			even = true;
		}
	};
};


let Image = () => {
	const state = React.useState(() => 200);
	const func = onClick(state[1]);




	console.log('func', func)

	return <div>
		<img 
			src="https://www.tynker.com/projects/screenshot/5a3975155ae029645f8b45d3/dsfsg.png" 
			alt="хуй"
			onClick={func}
			style={{
				width: state[0],
				height: state[0],
			}}
			 
			/>
	</div>
};

Image = React.memo(Image);
Image.defaultProps = {
};

export default Image;
