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
                <div className="message-container">
                    <div className="close" onClick={this.props.openMessage}>x</div>
                    <div className="message-body">
                        Hello, Kayla Marie.
                    <br />
                        Welcome to your daily love note. Every night before you go to sleep,
                        there will be a new message for you to read here.
                    <br />
                        I'm thinking you will like them. What do you think? :)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;