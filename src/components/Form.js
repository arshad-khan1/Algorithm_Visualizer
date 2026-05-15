import React from 'react';
import './Form.css';

export default function Form({
	formLabel,
	values,
	labels,
	currentValue,
	onChange,
}) {
	return (
		<div className='form-group'>
			<label className='form-label'>{formLabel}</label>
			<select className='form-select' value={currentValue} onChange={onChange}>
				{values.map((value, index) => (
					<option key={`${value}_${index}`} value={value}>
						{labels[index]}
					</option>
				))}
			</select>
		</div>
	);
}
