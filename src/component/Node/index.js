import React, { Fragment, useState, useReducer, useEffect, useRef } from 'react'
import { nodeReducer } from '../../reducer/nodeReducer'
import { Icon } from '../../icon'
import './node.css'

function Node({initalData,copyNode, pasteNode, parentNodeRef, index, deleteChildren}) {
    //State
    const [displayChildren, setDisplayChildren] = useState(true)
    const [isTarget, setIsTarget] = useState(false)
    const nodeRef = useRef()
    const nodeChildRef= useRef([])

    //Reducer : for complex state management
    const [{ title, children }, updateNodeData] = useReducer(nodeReducer, initalData)

    // Event handler
    const handleClick = (event) => {
        event.stopPropagation()
        setDisplayChildren(!displayChildren)
    }

    const handleOnDrop = (event) => {
        event.stopPropagation()
        const string = event.dataTransfer.getData('nodeData')
        const newNodeData = JSON.parse(string)
        updateNodeData(newNodeData)
        setIsTarget(false)
    }

    const handleOnDragStart = (event) => {
        event.stopPropagation()
        event.dataTransfer.setData('nodeData', JSON.stringify({ title, children }))
    }

    const handleIsTarget = (event) => {
        event.stopPropagation()
        setIsTarget(event.type === 'dragenter')
    }

    const handleCopy = (event) => {
        event.stopPropagation()
        copyNode({title, children})
    }

    const handlePaste = (event) => {
        event.stopPropagation()
        updateNodeData(pasteNode())
    }

    const handleCut = (event) => {
        event.stopPropagation()
        copyNode({title, children})  
        handleDelete(event)     
    }

    const handleDelete = (event) => {
        event.stopPropagation()
        if(parentNodeRef.current[index]){
            parentNodeRef.current[index].remove()
        }
        updateNodeData({action: 'DELETE'})
        updateNodeData({action: 'DELETE'})
    }
    
    const handleOnDragOver = (e) => e.preventDefault()

    return title ? (
        <Fragment>
            <ul
                draggable
                ref={nodeRef}
                className="parent-wrapper"
                onDrop={handleOnDrop}
                onDragEnter={handleIsTarget}
                onDragLeave={handleIsTarget}
                onDragStart={handleOnDragStart}
                onDragOver={handleOnDragOver}
                style={isTarget ? { background: 'aquamarine' } : {}}
            >
                <div className="parent">
                    <div className="icon-wrapper" onClick={handleClick}>
                        {
                            displayChildren ? <Icon.minus/> : <Icon.plus/>
                        } 
                    </div>
                    <div className="title">{title}</div>
                    <div className="action-icon-wrapper">
                        <Icon.copy className="action-icon" onClick={handleCopy}/>
                        <Icon.cut className="action-icon" onClick={handleCut}/>
                        <Icon.paste className="action-icon" onClick={handlePaste} />
                        <Icon.delete className="action-icon" onClick={handleDelete} />
                    </div>
                </div>
                {
                    displayChildren && Array.isArray(children) && (
                        <div className="child-wrapper">
                            {
                                children.map((child, index) =>  (
                                        <li
                                            className="child"
                                            key={index}
                                            ref={el => (nodeChildRef.current[index] = el)}
                                        >
                                            <Node 
                                                initalData={{...child}}
                                                copyNode={copyNode} 
                                                index={index}
                                                parentNodeRef={nodeChildRef}
                                                pasteNode={pasteNode}
                                            />
                                        </li>
                                    )
                                )
                            }
                        </div>
                    )
                }
            </ul>
        </Fragment>
    ) : null
}

export default Node