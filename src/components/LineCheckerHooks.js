import React, { useState } from 'react';
import '../App.css';

const LineCheckerHooks = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitCallback(value);
  }
    return (
      <>
        <div className="ui fluid input Line">
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)} />
          <button 
            onClick={handleSubmit}
            className="ui button basic violet">Check Line</button>
        </div>
        {/* <h2>The value is: {value}</h2> */}
      </>
    )
  }

export default LineCheckerHooks;