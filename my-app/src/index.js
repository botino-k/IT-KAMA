import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
//import store from './components/redux/store'
import store from './components/redux/store-redux'

  const root = ReactDOM.createRoot(document.getElementById("root"));

  const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
      state={state.getState()}
      dispatch={state.dispatch.bind(state)}
         />
    </BrowserRouter>
  )
}
rerenderEntireTree(store)
store.subscribe((()=>{rerenderEntireTree(store)}))