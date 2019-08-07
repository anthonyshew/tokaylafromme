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
                        Today, I had a little bit better of a day because they told me they are going to give
                        me the test that I need. I'm happy for that but I still wish all of this just didn't
                        have be happening in the first place.
                        <br />
                        However, I am thankful for everything that happens to me as far as you being in my life.
                        You are an absolute gem and every day still I wonder how I got so lucky. Eventually,
                        though, you're going to have to be sharing that feeling with our kids, just so you know. :)
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;