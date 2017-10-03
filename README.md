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