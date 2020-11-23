import React from "react";
import "./video.css";

export class Video extends React.Component {
  render() {
    return (
      <div className='clip'>
        <video controls autostart autoPlay muted src={this.props.src} />
      </div>
    );
  }
}
