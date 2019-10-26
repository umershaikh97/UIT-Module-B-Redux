import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
