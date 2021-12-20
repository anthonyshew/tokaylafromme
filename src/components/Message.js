import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

class Message extends Component {
  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={600} classNames="fadeIn">
        <div className="message-container" onClick={this.props.openMessage}>
          <div className="message-body">
            I like streaming with you in here, you are cute. :)
            <br />
            Love, Anthony Edward Shew
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Message;
