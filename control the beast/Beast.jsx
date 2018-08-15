const React = require("react");

class Beast extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.name == undefined ? "Yeti" : this.props.name };
    
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
      this.setState({name: event.target.value});
    }
    
    render() {
      return (
        <input id="controlledName" value={this.state.name} onChange={this.handleChange} />
      );
    }
}
