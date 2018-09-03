import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {todosReducer} from './reducers/todos_reducer';
import Root from './components/root';
import {allTodos} from './reducers/selectors';

window.allTodos = allTodos;
const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
