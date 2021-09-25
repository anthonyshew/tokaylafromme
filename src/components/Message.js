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
                        I am very happy to see you getting the rest and recovery you need. :)
                        <br />
                        Love, Anthony Edward Shew
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;