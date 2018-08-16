const React = require('react');

class Counter extends React.Component{
  constructor(props) {
  super(props);
  this.state = {counter: 0};
  
  this.handleIncrement = this.handleIncrement.bind(this);
  this.handleDecrement = this.handleDecrement.bind(this);
  }
  
  handleIncrement(event) {
    let increment = this.state.counter + 1;
    this.setState({counter: increment});
  }
  
  handleDecrement(event) {
    let decrement = this.state.counter - 1;
    this.setState({counter: decrement});
  }

  render() {
    return (
      <div>
        <h1 id="counter" >{this.state.counter}</h1>
          <button id="decrement" type="button" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button id="increment" type="button" onClick={this.handleIncrement}>
            Increment
          </button>
      </div>
    )
  }
}
