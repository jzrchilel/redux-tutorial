# Redux

### store
- The store orchestrates all the moving parts in Redux.
- The state of the whole application lives inside the store.
- The state in redux comes from reducers.
- The state of the application lives as a single, immutable object within the store.
- As soon as the store receives an action it triggers a reducer.

### reducer
- Reducers produce the state of your application.
- The state must return entirely from reducers
- A reducer is just a javascript function.
- A reducer takes two parameters: the current state and an action.
- Reducers must be pure.
- Reducers returns the next state depending on the action type.
- It should return at leaste the initial state when no actionn type matches.
- If the reduces as you app gets bigger, you can split a big reducer into separate functions
and combine them with _combineReduces_.

### action
- The only way to change the state is by sending a signal to the store.
- Dispatching an action is the process of sending out a signal.
- Redux actions are nothing more than javascript objects
- Every action needs a type property for describing how the state should change.
- And action creator is just a function that return an action

### react-redux
- react-redux is a redux binding for react.
- It connects a React component with the Redux store.
- _mapStateToProps_ connects a part of the Redux state to the props of a React component.
- _mapDispatchToProps_ connects Redux actions to React props.
- Provider is a HOC coming from react-redux.
- Provider wraps up your React application and makes it aware of the entire Redux store.
- React must talk to the store for accessing the state and dispatching actions.

### middlewares
- A redux middleware is a function that intercept, and act acordingly, our actions before the reach the reducer.
- middleware will hold the bulk of your application's logic.
- Inside middleware you can access getState and dispatch.
- middleware is a good place to abstract away business logic.
- middleware become reusable pieces of logic.
- middlewares can be tested in isolation.
- we keep components clean.
- you should always return next(action) in your middlewares

