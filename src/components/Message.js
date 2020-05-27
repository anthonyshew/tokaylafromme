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
                        PREQUALIFIED FOR A HOUSE AND ALL BECAUSE YOU ARE GUNNA BE THE BEST TEACHER EVER IM SO EXCITED LETS FREAKING GO I LOVE YOU ASLKDFJ;AWESUYRFL;ZHJXCGKLVYADR;KLGTFUYH
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;