import React from 'react';
import Header from './Header';
import LineCheckerHooks from './LineCheckerHooks';
import './../App.css';

const App = () => {
  const handleSubmitCallback = (props) => {
    console.log(props)
    // Currently this sends back the lineId and the inputted string.
  }

  return (
    <>
      <Header />
      <LineCheckerHooks 
        id={1}
        handleSubmitCallback={handleSubmitCallback}
        placeholderText="Enter a line with 5 syllables" />
      <LineCheckerHooks 
        id={2}
        handleSubmitCallback={handleSubmitCallback} 
        placeholderText="Enter a line with 7 syllables" />
      <LineCheckerHooks 
        id={3}
        handleSubmitCallback={handleSubmitCallback} 
        placeholderText="Enter a line with 5 syllables"/>
    </>
  )
}

export default App;