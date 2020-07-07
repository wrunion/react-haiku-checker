import React, { useState } from 'react';
import '../App.css';

const LineCheckerHooks = (props) => {
  const [value, setValue] = useState('');

  /* Pass input string to parent component (App) */
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitCallback({value: value, id: props.id});
  }
    return (
      <>
        <div className="ui fluid input Line">
          <input 
            type="text" 
            value={value}
            placeholder={props.placeholderText}
            onChange={(e) => setValue(e.target.value)} />
          <button 
            onClick={handleSubmit}
            id="CheckLineButton"
            className="ui button basic violet">Check Line</button>
        </div>
      </>
    )
  }

export default LineCheckerHooks;