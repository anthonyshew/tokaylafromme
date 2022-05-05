import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

class Message extends Component {
  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={600} classNames="fadeIn">
        <div className="message-container" onClick={this.props.openMessage}>
          <div className="message-body">
            I'm glad you are back in your groove and your mouth has pretty much
            almost healed. Now I just need to be able to kiss it. :)
            <br />
            Love, Anthony Edward Shew
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Message;
