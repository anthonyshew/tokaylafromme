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
                        Today, I'm still a little down in the dumps and you telling me about how you have my back
                        is really great for me. Also, nice job getting those pizzas delivered deep into the night
                        and early in the morning!
                        <br />
                        I miss you every day more and more. I can't wait to be back to you and happy. I cannotttt
                        wait.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;