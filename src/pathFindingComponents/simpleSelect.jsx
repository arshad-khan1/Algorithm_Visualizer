import React from 'react';
import '../components/Form.css'; // Reuse Form styling

const SimpleSelect = (props) => {
    const [age, setAge] = React.useState('0');

    const handleChange = (event) => {
        setAge(event.target.value);
        props.onAlgoChanged(parseInt(event.target.value));
    };

    return (
        <div className="form-group">
            <label className="form-label">{props.label || 'Select'}</label>

            <select 
                className="form-select"
                value={age}
                onChange={handleChange}
            >
                {props.items.map((item, itemidx) => (
                    <option key={itemidx} value={itemidx}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SimpleSelect;