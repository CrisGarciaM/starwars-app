import React from 'react';
import './OptionsInput.scss';

const OptionsInput = (props) => {
  function handleSelectChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <div className="input-container">
      <div className="inputs">
        <label htmlFor="startWars">What are you searching for</label>
        <select value={props.value} onChange={handleSelectChange}>
          <option value="people">Characters</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="race">Raze</option>
        </select>
      </div>
    </div>
  );
};

export default OptionsInput;
