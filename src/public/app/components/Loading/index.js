import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="loading">
        <i className="fa fa-instagram fa-2x" />
      </div>
    )
  }
}

export default Loading;