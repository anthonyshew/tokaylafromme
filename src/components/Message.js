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
                        I'm so anxious for our house because I just know we are going to make it look so good! Ah!
                        <br />
                        Love, Anthonio Eduardo Zapato
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;