import { useRef } from 'react'
import { afterReturn } from '../utils'

export function useCopyNode() {
    const currentNode = useRef(null) 

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

