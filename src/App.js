import React from 'react';
import Update from './UpdateStateInClass'
import Container1 from './containers/container1'

function App() {
   const name = 'moe';
  return (
   
    <div className="App">
     React + {name}
     <Update/>
     <Container1/>
    </div>
  );
}

export default App;
