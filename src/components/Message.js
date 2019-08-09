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
                        Today, I'm super psyched for you because you're getting so much work done for
                        school! That's the girl I love and know! I'm gunna be so pumped when you finish
                        your last class for school. You're totally gunna be had sex with. Smooches.
                        <br />
                        My pals today are having a tough time. They both reaggravated their injuries so
                        they had to buy some brews and go sit at the beach for awhile. I got gelato out
                        of it after dinner, though, so I'm stoked on it. I think you would like gelato,
                        we should get you some. It's like super ice cream! I love you. :D
                    <br />
                        Love, Anthony
                </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Message;