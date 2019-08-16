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
                        Today, you had your first "frustrating" day of school and while I know you don't want
                        to be annoyed, it makes me happy because I know that ya gotta deal with the ups and
                        downs of anything to truly start to master it, right? So, I'm glad you had a not
                        perfect one mixed in with all the perfect ones. That gives you a great learning
                        opportunity and I'm happy you will be better for it in the end. :D
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;