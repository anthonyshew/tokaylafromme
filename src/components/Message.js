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
                        Today, I'm really excited to come home to you soon. I wish I could just have left today but
                        these people have to do what they have to do and I am gunna respect it just in case that
                        they do decide that they want to finally give me my surgery. I am just really excited
                        to see you, that's all I know.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;