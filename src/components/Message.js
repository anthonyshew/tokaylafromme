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
                        Yes, I know my poop is sitting directly on the spoon that I am using but I've built up an immunity to it. Just like the 16 year old soup that I've been eating for the past year. You see, I'm perfectly okay. Nevermind the fact that I'm obese and have a bladder infection, a swollen stomach, mold growing under my right foot, IBS, TPS, LMS, vitamin deficencies, and that my hair is stiffer than copper wire. The hair thing is just because I can't get to my shower since that's where my motorcycle has been parked since 1978. It's a vintage piece, you wouldn't understand. HOARDERSSSSSSSSSS
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;