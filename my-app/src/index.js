import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import store from './components/redux/store-redux'

  const root = ReactDOM.createRoot(document.getElementById("root"));

  const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App store={state} />
    </BrowserRouter>
  )
}
rerenderEntireTree(store) // при первой загрузке рендорим апп
store.subscribe((()=>{rerenderEntireTree(store)}))// подписываемся на изменение (redux)