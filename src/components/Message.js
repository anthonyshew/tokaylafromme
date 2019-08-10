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
                        Today, you're in high spirits which puts my in high spirits then we're both in
                        high spirits and we're having a good time and yayayayayyayaya!
                        <br />
                        You're going back to the river to start your TOTALLY IN THE CLASSROOM TEACHING
                        ASSIGNMENTS and it's gunna be so awesome and I'm so excited for I REPEAT
                        SO EXCITED FOR YOU.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;