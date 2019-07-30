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
                        Today, I'm about to find some calculators online to see how much house we can afford.
                    <br />
                        Whether it's more than we think or less, I love thinking about making a home with you
                        and all the fun we are gunna have in the future. Babies, dogs, a house. :)
                    <br />
                        Yesssssssssssssss.
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;