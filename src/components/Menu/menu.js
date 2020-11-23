import React from "react";
import "./menu.css";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const text = event.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type='radio' name='src' value='fast' />
        <span>Fast</span>
        <input type='radio' name='src' value='slow' /> <span>Slow</span>
        <input type='radio' name='src' value='cute' /> <span>Cute</span>
        <input type='radio' name='src' value='eek' /> <span>Eek</span>
      </form>
    );
  }
}
