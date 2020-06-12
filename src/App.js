import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestA from './component/Dev/TestA';
import TestB from './component/Dev/TestB';
import Node from './component/Node'
import { useCopyNode } from './hooks/useCopyNode';
const tree = require('./data.json')
function App() {
  
  const {copyNode, pasteNode} = useCopyNode()
  console.log(tree)
  return (
    <div className="App">
      <Node 
        initalData={tree}
        copyNode={copyNode} 
        pasteNode={pasteNode}
      />
    </div>
  );
}

export default App;
