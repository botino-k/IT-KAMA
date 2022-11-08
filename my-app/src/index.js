import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import store from './components/redux/store-redux'
import ContextStore from './components/redux/ContextStore';

  const root = ReactDOM.createRoot(document.getElementById("root"));
// теперь в APP все дочерние компоненты имеют доступ к state. Но для этого они должны использовать .Consumer
  const rerenderEntireTree = (state) => {
    root.render(
      <BrowserRouter>
        <ContextStore.Provider value={state}>
          <App/>
        </ContextStore.Provider>
      </BrowserRouter>
    );
  };
rerenderEntireTree(store) // при первой загрузке рендорим апп
store.subscribe((()=>{rerenderEntireTree(store)}))// подписываемся на изменение (redux)