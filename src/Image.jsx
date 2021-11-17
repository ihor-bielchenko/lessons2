import React from 'react';

const onClick = (size, action) => {
	return () => {
		if (size === 200){
			action(600);
		}
		else {
			action(200);
		}
	};
};


let Image = () => {
	const [ size, setSize ] = React.useState(() => 200);
	const func = onClick(size, setSize);

	return <React.Fragment>
		<img 
			src="https://www.tynker.com/projects/screenshot/5a3975155ae029645f8b45d3/dsfsg.png" 
			alt="хуй"
			onClick={func}
			style={{
				width: size,
				height: size,
			}}
			 
			/>
	</React.Fragment>;
};

Image = React.memo(Image);
Image.defaultProps = {
};

export default Image;
