import React from 'react';
import './App.css';
import Node from './component/Node'
import { useCopyNode } from './hooks/useCopyNode';
import GithubBadge from './component/GithubBadge';
import Header from './component/Header';
const tree = require('./data.json')

function App() {
  const {copyNode, pasteNode} = useCopyNode()
  return (
    <div className="App">
      <Header/>
      <Node 
        initalData={tree}
        copyNode={copyNode} 
        pasteNode={pasteNode}
      />
    </div>
  );
}

export default App;
