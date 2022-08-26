import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};//Конструктор — это единственное место, где вы можете присвоить значение this.state напрямую.
  }
// «методами жизненного цикла» (lifecycle methods).
  componentDidMount() { //запускается после того, как компонент отрендерился в DOM
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {//запускается после того, как компонент был удален
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='clock'>
         <h2>Сейчас {this.state.date.toLocaleTimeString() /* props заменили на state */}</h2>
      </div>
    );
  }
}

export default Clock;