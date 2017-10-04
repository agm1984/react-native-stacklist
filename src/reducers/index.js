import { combineReducers } from 'redux'
import LibraryReducer from './library_reducer'
import SelectionReducer from './selection_reducer'

// LibraryReducer should return a function
/*                                             ie: libraries: () => []
                                                   console.log(store.getState())
                                                >  { libraries: [] }                     */
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})
