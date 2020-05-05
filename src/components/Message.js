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
                        You've been hard at work all day and I just love to see it. There are so many girls out there that aren't willing to do things right now that matterj and I'm watching your pretty little self work right now and I love it. You also look super adorable today, too. :)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;