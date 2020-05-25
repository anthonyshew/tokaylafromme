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
                        I'm sorry I haven't written you in a couple days...There's been...a lot going on...But I love you and I'm proud of you for staying calm when you were having a difficult conversation. Now I shall flip you the bird and scream profanity. Goodbye.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;