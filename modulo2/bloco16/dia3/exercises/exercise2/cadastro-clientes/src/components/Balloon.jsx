import React, { Component } from 'react';
import './balloon.css';

class Balloon extends Component {
  render() {
    return(
      <div className="balloon-container">
        <div className="balloon-children">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Balloon