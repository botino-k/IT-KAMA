import TestComponent from './Examples/TestComponent'
import Calculator from './Examples/WaterCalculator/Calculator'

import { useState, useEffect, useRef, React } from "react";

const ClassComponent = (props) => {

  const [value, setValue] = useState('');
  const ref = useRef();
  const onInputSSubmit = () => {
    setValue(() => ref.current.value);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={onInputSSubmit}>Send</button>
      <TestComponent name={value} />
      <Calculator />
    </div>
  )
}

export default ClassComponent;