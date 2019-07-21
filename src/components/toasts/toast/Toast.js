import React, { Component } from "react";

class Toast extends Component {
  render() {
    const { color, text, onDismissClick } = this.props;
    return (
      <li className="toast" style={{ backgroundColor: color }}>
        <p className="toast__content">{text}</p>
        <button className="toast__dismiss" onClick={onDismissClick}>
          x
        </button>
      </li>
    );
  }
  /*
  Toast notifications cannot be changed once they are rendered, so will return false in shouldComponentUpdate to prevent uncessary rendering
  */
  shouldComponentUpdate() {
    return false;
  }
}

export default Toast;
