import React, { Component } from 'react';

import { CSSTransition } from 'react-transition-group';

class Message extends Component {
    render() {
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="fadeIn"
            >
                <div className="message-container" onClick={this.props.openMessage}>
                    <div className="message-body">
                        You've been cooking some great dinners and I appreciate it to the max.
                        <br />
                        Love, Anthony Edward Shew
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;