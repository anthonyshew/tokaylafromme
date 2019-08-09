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
                        Today, I'm really bored because I don't get to play catch so that's boring, boring, boring.
                        <br />
                        Someone did mention today, though, that there is less than a month until everyone here breaks
                        camp and goes him so I plan on leaving for good whenever that happens no matter what. Isn't
                        that amazing?! Less than a month and I get to see you!!! Yesssssssss!!!
                        I love you. :)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;