import React from 'react';

const onClick = (action) => {
	return () => {
		action(600);
	};
};

let Image = () => {
	const state = React.useState(() => 200);
	const func = onClick(state[1]);

	console.log('func', func)

	return <>
		<img 
			src="https://upload.wikimedia.org/wikipedia/commons/1/18/%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BE_%D0%A1%D0%B5%D0%BB%D0%B8%D0%B3%D0%B5%D1%80.JPG" 
			alt="хуй"
			onClick={func}
			style={{
				width: state[0],
				height: state[0],
			}} />
	</>
};

Image = React.memo(Image);
Image.defaultProps = {
};

export default Image;
