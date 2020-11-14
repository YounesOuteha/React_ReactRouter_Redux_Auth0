import React from 'react';
import Update from './UpdateStateInClass'

function App() {
   const name = 'moe';
  return (
   
    <div className="App">
     React + {name}
     <Update/>
     
    </div>
  );
}

export default App;
