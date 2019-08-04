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
                        Today, I super proud of you for delivering all those pizzas. I know you don't
                        want to do it and you're doing it because you have to. That's what makes it so
                        brave and so important
                    <br />
                        Everything we are doing right now is going to pay off in the end. I know it.
                    <br />
                        (I fully mean that in the financial sense. I am loving every day that I get to
                        call you mine and I am proud of both of us for doing what we do every single day.)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;