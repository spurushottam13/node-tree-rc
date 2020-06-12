# Tree Drag & Drop RC Coding

* No Third Party Lib, otherthan `React`
* All Functional Code and Hooks
* Statisty all four requirment
* Animation Added
* Most Optimal Solution (best I Can)


## Node Component
* After Inital Render Each node maintain their own state using `useReducer` hook , so thating adding a node to one does not affect the state change of other node.

## Custom Hook

##  `useCopyNode`
*  Provide Central Depository for all Node while node is moving and provide method like   
    * `copyNode` : push the required node into Depository  
    * `pasteNode` : Pop the node out of Depository into rquired context and reset depository.


## To Start Project   
```javascript
npm install
npm start
```
