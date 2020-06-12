import React from 'react';
import './App.css';
import Node from './component/Node'
import { useCopyNode } from './hooks/useCopyNode';
import GithubBadge from './component/GithubBadge';
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
      <GithubBadge/>
    </div>
  );
}

export default App;
