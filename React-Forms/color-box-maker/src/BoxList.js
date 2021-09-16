import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);

	const createBox = (newBox) => {
		setBoxes((boxes) => [ ...boxes, newBox ]);
	};

	const deleteBox = (id) => {
		setBoxes((boxes) => boxes.filter((b) => b.id !== id));
	};
	console.log(boxes);
	return (
		<div>
			<NewBoxForm createBox={createBox} key={'newboxform'} />

			{boxes.map(({ width, height, color, id }) => (
				<Box
					id={id}
					key={id}
					width={width}
					height={height}
					color={color}
					deleteBox={deleteBox}
				/>
			))}
		</div>
	);
};

export default BoxList;
