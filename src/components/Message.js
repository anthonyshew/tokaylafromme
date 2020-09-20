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
                        Seeing you working away on your computer at home makes me proud of the work you do. Them kids be so lucky.
                        <br />
                        Love, Anthony Edward Shew
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;