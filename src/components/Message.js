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
                        I'm so exhausted from working my butt off so we can make some baby money but I know it's gunna be worth it so I'm just going through it.
                        <br />
                        Love, Anthony Edward Shew
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;