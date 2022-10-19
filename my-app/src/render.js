import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import {addPost, updateNewChangeInput} from './components/redux/state'
import state from './components/redux/state'

  const root = ReactDOM.createRoot(document.getElementById("root"));

  export const rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewChangeInput={updateNewChangeInput} />
    </BrowserRouter>
  )
}