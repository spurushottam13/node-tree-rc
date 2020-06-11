import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestA from './component/Dev/TestA';
import TestB from './component/Dev/TestB';
import Node from './component/Node'
function App() {
  const tree = require('./data.json')
  console.log(tree)
  return (
    <div className="App">
      {/* <TestA/>
      <TestB/> */}
      <Node {...tree}/>
    </div>
  );
}

export default App;
