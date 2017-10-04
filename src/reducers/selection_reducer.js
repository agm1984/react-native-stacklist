import {
    SELECT_LIBRARY
} from '../actions/types'

// this is the boilerplate for just about every reducer we will ever make
// state = null (or state = {}) fires on the initial state, aka on App bootup
export default (state = null, action) => {
    switch (action.type) {
        case SELECT_LIBRARY:
            return action.payload

        default:
            return state
    }
}
