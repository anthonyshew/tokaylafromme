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
                        Today, I was wishing I was sitting on the beach with you without a care in the world.
                        I'd have the most beautiful view in the world. Oh, and the ocean would like nice, too.
                    <br />
                        I miss you a lot and I know when I see you again I am going to be ecstatic.
                        It's gunna be the greatest hug the world has ever known.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;