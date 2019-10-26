import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
//import { RootReducer } from './reducers';
//import thunk from 'redux-thunk';

//const middleware = applyMiddleware(thunk);
//const store = createStore(RootReducer, middleware);

//const store = createStore(RootReducer); (when using multiple reducers and importing from index.js)


const store = createStore(counterReducer)

export default store;