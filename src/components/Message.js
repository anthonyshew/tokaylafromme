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
                        Today, I really miss you because you've been doing the Lord's work and
                        making people happy with their pizzas - but it's okay. You're doing what you
                        gotta do.
                    <br />
                        My arm actually felt kinda okay today but I'm going to be going to the doctor
                        in the morning to hopefully finally get some answers about what really needs to happen.
                        It is just making me think of how thankful I am to have you and you dealing with all this
                        mess that I'm going through. When I have your support, I feel so much better.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;