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
                        I LOVE watching you do your baking. I think you already know how much I love watching you do something when you're concentrated but, obviously, watching a lady bake in the kitchen really tickles my loins (know you love it when I say that). It makes me think to when you're going to be a momma and I liiiiiiiike it.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;