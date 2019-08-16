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
                        Today, I had the doctor visit and they just still are unwilling to make decisions
                        AND IM GUNNA LOSE MY MIND AHAHAHAHAHAAAHAHAHAHHHAHAHAHAH
                    <br />
                        Not really but it is pretty annoying. I'm just glad I have you to talk to about
                        it and that you are doing so great in Bullhead. :) Hope you and Bear are braving
                        the heat splendidly today.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;