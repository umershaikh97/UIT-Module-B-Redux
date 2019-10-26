import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const initialState = {
    todos: [],
    posts: [],
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case 'ADD_POSTS':
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
}

const store = createStore(myReducer);

store.subscribe(() => {    // This function will be called, whenever the state will be updated
    console.log("State Updated : ", store.getState())
});

store.dispatch({ type: "ADD_TODO", payload: 'Programming' });
store.dispatch({ type: "ADD_POSTS", payload: 'This is Post 1' });
store.dispatch({ type: "ADD_TODO", payload: 'Go to university' });
store.dispatch({ type: "ADD_POSTS", payload: 'This is Post 2' });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
