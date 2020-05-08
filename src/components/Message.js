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
                        Cuddling with you literally has a physiological effect on me, I've noticed. When I'm feeling somewhat stressed or otherwise even moderately unhappy, cuddling with you just sends me to a different mentally that everything is alright. And, of course, if I'm already in the happys, then I just start doing all the better. :D
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;