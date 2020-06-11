import React, { Fragment, useState } from 'react'

function Node(prop){
    const [displayChildren, setDisplayChildren] = useState(true)
    const [nodeData, updateNodeData] = useState(prop)
    const {title, children} = nodeData
    return (
        <Fragment>
            <ul 
                onClick={ _ => {
                    _.stopPropagation()
                    setDisplayChildren(!displayChildren)
                }}
                className="parent"
                draggable 
                onDrop={e => {
                    e.stopPropagation()
                    console.log("DER",e.target)
                }} 
                onDragOver={e => e.preventDefault()}
            >
                <p>{title}</p>
                {
                    displayChildren && Array.isArray(children) && (
                        children.map((child, index) => (
                            <li 
                                className="child"
                                key={index}
                            >
                                <Node {...child} />
                            </li>
                        ))
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Node