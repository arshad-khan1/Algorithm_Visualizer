import { useState, useEffect } from 'react';
import './Bar.css';

const Bars = ({ index, length, color, changeArray }) => {
	const [len, setLength] = useState(length);

	useEffect(() => {
		setLength(length);
	}, [length]);

	const colors = [
		'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)', // Default
		'linear-gradient(180deg, #ef4444 0%, #dc2626 100%)', // Comparing
		'linear-gradient(180deg, #10b981 0%, #059669 100%)'  // Sorted
	];

	let barStyle = {
		background: colors[color],
		height: `${length}px`,
		width: '100%',
		borderRadius: '4px 4px 0 0',
		transition: 'height 0.2s ease, background 0.2s ease',
		position: 'relative'
	};

	return (
		<div className='bar-wrapper' style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
			<div className='bar' style={barStyle}>
				<span className='bar-value'>{len}</span>
			</div>
		</div>
	);

};

export default Bars;
