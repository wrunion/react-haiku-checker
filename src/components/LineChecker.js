import React, { Component } from 'react';
import '../App.css';

class LineChecker extends Component {
  state = {value: ''};

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <>
        <div className="field ui fluid input Line">
          <input 
            type="text" 
            value={this.state.value}
            onChange={this.handleChange} />
        </div>
        {this.state.value}
      </>
    )
  }
}

export default LineChecker;