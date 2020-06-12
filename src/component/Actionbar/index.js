import React, { useState, Fragment, useRef, useEffect } from 'react'
import './action.css'
import { Icon } from '../../icon'

export default function ActionBar({
    updateNodeData,
    title,
    children,
    copyNode,
    parentNodeRef,
    index,
    nodeParentRef,
    pasteNode
}) {

    const [isInputActive, setInputActive] = useState(null)
    const [inputValue, setInputValue] = useState(null)
    const inputRef =  useRef()
    const wrapperRef = useRef()

    const handleCopy = (event) => {
        event.stopPropagation()
        copyNode({ title, children })
    }

    const handlePaste = (event) => {
        event.stopPropagation()
        updateNodeData(pasteNode())
    }

    const handleCut = (event) => {
        event.stopPropagation()
        copyNode({ title, children })
        handleDelete(event)
    }

    const handleDelete = (event) => {
        event.stopPropagation()
        if (parentNodeRef.current[index]) {
            parentNodeRef.current[index].remove()
        }
        updateNodeData({ action: 'DELETE' })
        updateNodeData({ action: 'DELETE' })
    }

    const handleAdd = (event) => {
        event.stopPropagation()
        updateNodeData({title: inputValue})
        setInputActive(false)
    }

    const handleShowInput = () => setInputActive(true)

    useEffect(() => {
        if(isInputActive){
            wrapperRef.current.className="action-icon-wrapper synthetic-hover"
        }else {
            wrapperRef.current.className="action-icon-wrapper"
        }
    },[isInputActive])

    return (
        <div className="action-icon-wrapper" ref={wrapperRef}>
            {
                isInputActive ? (
                    <Fragment>
                        <input type="text" onChange={({target:{value}}) => setInputValue(value)} className="add-input" />
                        {
                            inputValue ? (
                                <Icon.tick className="action-icon" onClick={handleAdd} />
                            ) : (
                                <Icon.cross className="action-icon" onClick={_ => setInputActive(false)} />
                            )
                        }
                        
                    </Fragment>
                ) : (
                        <Fragment>
                            <Icon.copy className="action-icon" onClick={handleCopy} />
                            <Icon.paste className="action-icon" onClick={handlePaste} />
                            <Icon.cut className="action-icon" onClick={handleCut} />
                            <Icon.delete className="action-icon" onClick={handleDelete} />
                            <Icon.add className="action-icon" onClick={handleShowInput} />
                        </Fragment>
                    )
            }
            
        </div>
    )
}