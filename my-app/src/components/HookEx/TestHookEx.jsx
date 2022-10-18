import {Context} from './HookWr.jsx'


const TestHookEx = () => {
  // const value = useContext(Context);
  // return (
  //   <section>
  //     {value}
  //     </section>
  //   );

    return (
 <>
      <Context.Consumer>
       {value => <span>{value}</span>}
      </Context.Consumer>
      <span> Context.Consumer</span>
      </>
    );
};

export default TestHookEx;