import React from 'react';
import Header from './Header';
import LineCheckerHooks from './LineCheckerHooks';
import './../App.css';

const App = () => {
  const handleSubmitCallback = (props) => {
    console.log(props)
  }

  return (
    <>
      <Header />
      <LineCheckerHooks 
        lineId={1}
        handleSubmitCallback={handleSubmitCallback}
        placeholderText="Enter a line with 5 syllables" />
      <LineCheckerHooks 
      lineId={2}
        handleSubmitCallback={handleSubmitCallback} 
        placeholderText="Enter a line with 7 syllables" />
      <LineCheckerHooks 
      lineId={3}
        handleSubmitCallback={handleSubmitCallback} 
        placeholderText="Enter a line with 5 syllables"/>
    </>
  )
}

export default App;