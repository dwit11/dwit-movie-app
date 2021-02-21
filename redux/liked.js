const liked = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'REMOVE_LIKE':
            return [
                ...state.filter(item => item.id != action.payload)
            ]
        default:
            return state

    }
}

export default liked