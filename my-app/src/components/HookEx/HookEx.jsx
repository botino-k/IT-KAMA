
import {Context} from './HookWr.jsx'
import { useContext } from "react";
import TestHookEx from './TestHookEx.jsx';

const HookEx = () => {

  const [value, setValue] = useContext(Context);

  function ccc (){
    setValue('wtf')
  }
  return (
    <section>
      <TestHookEx/>
      <div style={{display: 'flex', gap:'3px'}}>
      <div>{value}</div>
      <span onClick={ccc}>useCon'text</span>
      </div>
      
      </section>
    );

};

export default HookEx;