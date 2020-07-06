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
        handleSubmitCallback={handleSubmitCallback} />
      <LineCheckerHooks 
        handleSubmitCallback={handleSubmitCallback} />
      <LineCheckerHooks 
        handleSubmitCallback={handleSubmitCallback} />
    </>
  )
}

export default App;