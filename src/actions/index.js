import {
    SELECT_LIBRARY
} from './types'

export const selectLibrary = (libraryId) => {
    return {
        type: SELECT_LIBRARY,
        payload: libraryId
    }
}

// 1. determine where we want to call the Action Creator from (the ListItem component)
// 2. import action creators into that component
// 3. import connect
// 4. pass actions into connect (optional mapStateToProps also)
// 