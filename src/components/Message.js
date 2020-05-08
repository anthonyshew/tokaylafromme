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
                        T'was graduation day and it was glorious. There's really nothing else to say about it. :)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;