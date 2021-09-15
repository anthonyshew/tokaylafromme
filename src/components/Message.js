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
                        I miss you all of the dayzzzzzzzz. But it's for a good reason and I love you for it.
                        <br />
                        Love, Anthony Edward Shew
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;