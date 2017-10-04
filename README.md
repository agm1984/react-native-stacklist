# React Native Collapsable Lists & Animations
> This app is designed to highlight Redux and state management, but also to discuss and utilize techniques for optimizing component rendering and parsing speed due to mobile concerns. It also shows some of the RN animations API.

# Installation
> I had a lot of problems with this project due to upgrading Gradle after installing it. I learned a lot about some intricacies with build environment in React Native, Android Studio, SDK Tools, Gradle, and in the end, I reinstalled Android Studio 2.3.3 and utilized API Level 23 for the Marshmallow emulator. I also recreated the project fresh and made a new repo, which is this one.

``` bash
$ npm install
```

# Run-time
``` bash
$ react-native run-android
```

# Revisiting Redux
From URL: https://stephengrider.github.io/JSPlaygrounds/

``` javascript
// REDUCER
const reducer = (state = [], action) => {
  if (action.type === 'SPLIT_STRING') return action.payload.split('')
  // NEVER mutate state in reducers, only return new object
  if (action.type === 'ADD_CHARACTER') return [...state, action.payload]
  return state
}

// CREATE STORE
const store = Redux.createStore(reducer)

// GET STORE
store.getState()

// CREATE & DISPATCH ACTION
const action = { type: 'SPLIT_STRING', payload: 'asdf' }
store.dispatch(action)
store.getState()

// CREATE ANOTHER ACTION
const action2 = { type: 'ADD_CHARACTER', payload: 'a' }
store.dispatch(action2)
store.getState()
```

# App Flow

1. App boots up
2. Redux creates a new store (createStore) using libraries reducer
3. When store is created, it runs this reducer one time
4. We get a piece of state called libraries *(state.libraries)*
5. Then we pass it to the Provider as a prop
6. It stays there for the rest of the lifespan of the application
7. The Provider aids communication between React and Redux
8. The App is then rendered to the screen
9. Then the LibraryList component loaded
10. connect() boots up, then reaches up to Provider and asks for the state
11. Provider gives the state, and connect() pumps it down into the component as props *(this.props.libraries)*

`Note:` When the app boots up, all the reducers will run once to populate the state of the app.
