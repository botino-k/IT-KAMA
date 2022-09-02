
import {Context} from './HookWr.jsx'
import { useContext } from "react";
import TestHookEx from './TestHookEx.jsx';

const HookEx = () => {
  const value = useContext(Context);
  
  return (
    <section>
      <TestHookEx/>
      <div style={{display: 'flex', gap:'3px'}}>
      <div>{value}</div>
      <span>useContext</span>
      </div>
      
      </section>
    );

};

export default HookEx;