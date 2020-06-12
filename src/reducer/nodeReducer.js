export function nodeReducer(state, payload) {
    if(!payload) return state
    if(payload.action === 'DELETE') return payload
    if (Array.isArray(state.children)) {
        return { ...state, children: [...state.children, payload] }
    } else {
        return { ...state, children: [payload] }
    }
}