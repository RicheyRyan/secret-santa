import React, { Component } from 'react';
import './App.css';
import MatchView from '../MatchView/MatchView.js';
import EmailView from '../EmailView/EmailView.js';

import getParticipants from '../Utils/get-participants.js';
import generateMatches from '../Utils/generate-matches.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailView: false,
      matches: null,
      users: {
        items: [],
        byId: {},
      },
    };
    getParticipants().then(users => this.setState({ users }));
  }

  componentWillUpdate(nextProps, nextState) {
    const { matches, users } = nextState;
    if (users.items.length && !matches) {
      this.setState({ matches: generateMatches(users) });
    }
  }

  reshuffle = () => {
    const users = this.state.users;
    this.setState({ matches: generateMatches(users) });
  };

  sendEmails = () => {
    alert('Emails sent, thanks for using Secret Santa');
    this.setState({ showEmailView: false });
  };

  toggleEmailView = () =>
    this.setState({
      showEmailView: !this.state.showEmailView,
    });

  render() {
    const { matches, users, showEmailView } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Secret Santa</h1>
        </header>
        {showEmailView
          ? <EmailView
              sendEmails={this.sendEmails}
              toggleEmailView={this.toggleEmailView}
              users={users}
              matches={matches}
            />
          : <MatchView
              users={users}
              matches={matches}
              reshuffle={this.reshuffle}
              toggleEmailView={this.toggleEmailView}
            />}
      </div>
    );
  }
}

export default App;
