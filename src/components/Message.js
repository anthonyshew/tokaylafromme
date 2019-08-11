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
                        Today, I'm sooooooooooo excited for you to be in one place for awhile. You're
                        putting it down in the ol' Arizona Zone-a and you get to chill there for a bit
                        (as far as moving around goes - you still have work to do! :] )
                        <br />
                        I know achieving even that small amount of stability is amazing for you and
                        it means a lot for the both of us. One step closer to what we are envisioning!
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;