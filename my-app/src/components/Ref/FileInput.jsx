import React from 'react';
import {Clock} from './Test';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmitClick = () => {

    const name = this._name.value;
    // do something with `name`
    console.log(name)
    console.log(this.props.refPage)
    this.props.refPage.push(name)
   
  };

  render() {
  
    return (
      <div>
        <input type="text" ref={(input) => (this._name = input)} />
        <button onClick={this.handleSubmitClick}>Sign up</button>
<div><Clock /></div>

      </div>
    );
  }
}

export default FileInput;