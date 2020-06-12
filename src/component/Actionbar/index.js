import React from 'react'
import './action.css'
import { Icon } from '../../icon'

export default function ActionBar({
    updateNodeData,
    title,
    children,
    copyNode,
    parentNodeRef,
    index,
    pasteNode
}) {
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
    
    return (
        <div className="action-icon-wrapper">
            <Icon.copy className="action-icon" onClick={handleCopy} />
            <Icon.cut className="action-icon" onClick={handleCut} />
            <Icon.paste className="action-icon" onClick={handlePaste} />
            <Icon.delete className="action-icon" onClick={handleDelete} />
        </div>
    )
}