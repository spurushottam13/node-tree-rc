import React from 'react';
import './App.css';
import Node from './component/Node'
import { useCopyNode } from './hooks/useCopyNode';
const tree = require('./data.json')

function App() {
  const {copyNode, pasteNode} = useCopyNode()
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
