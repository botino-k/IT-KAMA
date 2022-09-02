import React from 'react';
import HookEx from './HookEx.jsx';
import { createContext, useState  } from "react";
import stl from './HookEx.module.css'


export const Context = createContext('Default Value');

const HookWrapper = (props) => {
  const[value, setValue] = useState(0)

  const counter = ()=>setValue(value+1)
   
  return (
    <section>
      <div><button onClick={counter}> click</button></div>
      <Context.Provider value={value}>
      <HookEx/>
      </Context.Provider>

      <div className={stl.picture}><img src="https://dmitripavlutin.com/90649ae4bdf379c482ad24e0dd220bc4/react-context-3.svg" alt="useContex" /></div>
      </section>
    );

};

export default HookWrapper;