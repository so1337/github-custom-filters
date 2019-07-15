import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FilterInput = ({
  type, onChange, presetValues, name, separator,
}) => {
  const [value, setValue] = useState('');
  const [addText, setAddValue] = useState('');
  let input;
  switch (type) {
    case 'text': input = (
      <div>
        <label htmlFor={`filter-input-${name}`}>{name}</label>
        <input
          className="filter-text-input"
          placeholder={name}
          id={`filter-input-${name}`}
          value={value}
          onChange={(event) => {
            onChange({ value: event.target.value, key: name });
            setValue(event.target.value);
          }}
        />
        {presetValues && presetValues.map(element => (
          <button
            className="filter-button-input"
            onClick={() => {
              setValue(element);
              onChange({ value: element, key: name });
            }}
          >
            {element}
          </button>
        ))}
      </div>
    );
      break;
    case 'date': input = (
      <div>
        <label htmlFor={`filter-input-${name}`}>{name}</label>
        <input
          type="date"
          className="filter-text-input"
          placeholder={name}
          onChange={(event) => { onChange({ value: event.target.value, key: name }); }}
        />
      </div>
    );
      break;
    case 'radio': input = (
      <div>
        <label htmlFor={`filter-input-${name}`}>{name}</label>
        {presetValues.map(element => (<button className="filter-button-input" onClick={() => { onChange({ value: element, key: name }); }}>{element}</button>))}
      </div>
    );
      break;
    case 'badges': input = (
      <div>
        <label htmlFor={`filter-input-${name}`}>{name}</label>
        {value && value.split(separator).map((text, index) => (
          <button
            className="filter-button-input"
            onClick={() => {
              const textData = value.split(separator);
              textData.splice(index, 1);
              setValue(textData.join(separator));
              onChange({ value: textData.join(separator), key: name });
            }}
          >
            {text}
            {' '}
            [X]
          </button>
        ))
        }
        <input placeholder="add label" className="filter-text-input" value={addText} onChange={(event) => { setAddValue(event.target.value); }} type="text" />
        <button
          className="filter-button-input"
          onClick={() => {
            const updatedValue = value ? value.split(separator) : [];
            updatedValue.push(addText);
            setValue(updatedValue.join(separator));
            setAddValue('');
            onChange({ value: updatedValue.join(separator), key: name });
          }}
        >
          Add
        </button>
      </div>
    );
      break;
    default: input = (
      <input
        className="filter-text-input"
        placeholder="Enter text..."
        onChange={(event) => { onChange(event.target.value); }}
      />
    );
  }
  return (
    <div className="filter-block">
      {input}
    </div>
  );
};

FilterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  presetValues: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  separator: PropTypes.string,
};

FilterInput.defaultProps = {
  presetValues: null,
  separator: ',',
  type: 'text',
};

export default FilterInput;
