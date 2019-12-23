import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style/style.css';
import store from './redux/store';


const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, rootElement);