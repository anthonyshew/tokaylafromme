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
                        I am thankful for you for going to the store and bringing me back food. I know I'm obnoxiously busy and so I don't go and that's probably annoying but I just want to contribute to our house, I swear.
                        <br />
                        Love, Antonio Eduardo Zapato
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;