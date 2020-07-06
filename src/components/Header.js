import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="ui header violet">
    <h1>Haiku Checker
      <div className="sub header">
        Enter a three line poem to see if it's a Haiku!
      </div>
    </h1>
  </div>
  );
}
export default Header;