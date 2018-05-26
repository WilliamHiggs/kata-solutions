const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      wish: '',
      priority: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

   handleSubmit(event) {
    event.preventDefault();
    send(this.state);
  }

   onChange(event) {
    this.setState({
      name: event.target.value,
      wish: event.target.value,
      priority: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
       <input type="text" id="name" value={this.state.name} onChange={this.onChange} />
       <textarea id="wish" value={this.state.wish} onChange={this.onChange} />
       <select id="priority" value={this.state.priority} onChange={this.onChange}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
       <input type="submit" value="submit">SUBMIT</input>
      </form>
    );
  }
};
