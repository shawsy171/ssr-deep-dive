import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Im the home component</h1>
      <button onClick={() => { console.log('you clicked me') }}>Press Me</button>
    </div>
  )
};

export default Home;