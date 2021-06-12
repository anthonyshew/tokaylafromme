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
<<<<<<< HEAD
                        Sure is nice to be home with you. :)
=======
                        HAPPY OREGON TIMES WITH UUUUU YA YA YA
>>>>>>> 1669979b654aad1b028c4b3edd14d54b58290218
                        <br />
                        Love, Anthony Edward Shew
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;