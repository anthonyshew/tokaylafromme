import React from 'react';
import './App.css';

import Top from "./components/Top";
import Message from "./components/Message";
import Bottom from "./components/Bottom";

import { CSSTransition } from 'react-transition-group';

const heart = require('./heart.png');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearPage: true,
      messageIsOpen: false,
    }
  }

  openMessage = () => {
    this.state.messageIsOpen ? this.setState({ messageIsOpen: false }) : this.setState({ messageIsOpen: true });
  }

  render() {

    const { appearPage, messageIsOpen } = this.state

    return (
      <CSSTransition
        in={appearPage}
        appear={true}
        timeout={600}
        classNames="fadeIn"
      >
        <div className="App" onClick={this.openMessage} >
          <Top />
          <div className="heart">
            <imgsrc={heart} alt="My heart." />
          </div>
          {messageIsOpen && <Message openMessage={this.openMessage} />}
          <Bottom />
        </div>
      </CSSTransition>
    );
  }
}

export default App;
