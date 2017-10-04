import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

// Provider: works with store, to translate data in store          (the glue)
// for use by the React Application (communication with React)
// Pass the combined reducers in to createStore

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    )
}

export default App