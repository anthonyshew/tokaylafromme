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
                        Today, you're asking me for just...more. And I'm glad. I don't want you to feel like you are in this alone. Because you're not. And I want you to know that. That's why these notes are coming back to you. Just because I'm around doesn't mean that you don't need to hear something about my thoughts on you, me, and us, every day. So, that's why you're going to start seeing these again. I love you.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;