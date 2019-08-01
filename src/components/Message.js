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
                        Today, I was going to tell you about how proud I am of you being about to start
                        your teaching stuff in a classroom - but I don't think I can figure out how!
                    <br />
                        I'm honestly so excited for you and I am looking forward to hearing all about it.
                        I know you'll just be observing but I know you'll be so good all along the whole journey
                        to a full blown teaching credential!
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;