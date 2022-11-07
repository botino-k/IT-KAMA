import React from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.tryConvert = this.tryConvert.bind(this);
    this.toCelsius = this.toCelsius.bind(this);
    this.toFahrenheit = this.toFahrenheit.bind(this);

    this.state = {
      temperature: '',
      scale: '',
    };
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const celsius = this.state.scale === 'f' ? this.tryConvert(this.state.temperature, this.toCelsius) : this.state.temperature;
    const fahrenheit = this.state.scale === 'c' ? this.tryConvert(this.state.temperature, this.toFahrenheit) : this.state.temperature;

    return (
      <>
        <TemperatureInput onTemperatureChange={this.handleCelsiusChange} temperature={celsius} scale='c' />
        <TemperatureInput onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit} scale='f' />
        <BoilingVerdict celsius={celsius} />
      </>
    );
  }
}
export default Calculator;