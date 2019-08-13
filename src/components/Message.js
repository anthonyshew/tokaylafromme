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
                        Today, I'm gunna be honest, I still am so caught up on how cool you are being in your
                        little classroom with your little friends and your little notebook and how cute you must
                        look taking your little notes. Soooooo hot. Want to touch the hiney. AOOGAHHH!
                        <br />
                        You cute. :) Me want. :) I love you so. :D
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;