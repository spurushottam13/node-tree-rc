import React, { useRef, useEffect } from 'react'
import { afterReturn } from '../utils'

export function useCopyNode() {
    const currentNode = useRef(null)

    useEffect(() => {
        if(currentNode.current){
            console.groupCollapsed("Node: Copy")
        }else{
            console.groupCollapsed("Node: Paste")
        }
        console.log(currentNode.current)
        console.groupEnd()      
    },[currentNode.current])
    
    const copy = (node) => {
        currentNode.current = node
    }
    const paste = node => {
        if(!currentNode.current) {
            return console.error("[useCopyNode] : trying to paste node without copying")
        }
        afterReturn(() => currentNode.current = null)
        return currentNode.current
    }
    return {
        copyNode: copy,
        pasteNode: paste
    }
}

