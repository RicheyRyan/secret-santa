import React from 'react';
import './EmailView.css';
import Cta from '../Cta/Cta.js';
import EmailBody from '../EmailBody/EmailBody.js';
import { getUsersName } from '../Utils/user.js';

class EmailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  previousUser = () => {
    this.setState((state, props) => {
      const nextIndex = state.currentIndex - 1;
      const usersLen = props.users.items.length;
      return {
        currentIndex: nextIndex >= 0 ? nextIndex : usersLen - 1,
      };
    });
  };

  nextUser = () => {
    this.setState((state, props) => {
      const nextIndex = state.currentIndex + 1;
      const usersLen = props.users.items.length;
      return {
        currentIndex: nextIndex < usersLen ? nextIndex : 0,
      };
    });
  };

  render() {
    const { matches, toggleEmailView, users } = this.props;
    const currentUser = users.items[this.state.currentIndex];
    const matchedUserId = matches[currentUser.guid];
    const matchedUser = users.byId[matchedUserId];

    return (
      <div className="email-view">
        <Cta
          label={'Go Back To List'}
          message={'Not finished?'}
          onClick={toggleEmailView}
        />
        <h3>
          Email for: {getUsersName(currentUser)}
        </h3>
        <div className="email-view-controls">
          <button onClick={this.previousUser}>Previous</button>
          <p>Will be sent to {currentUser.email}</p>
          <button onClick={this.nextUser}>Next</button>
        </div>
        <EmailBody user={currentUser} matchedUser={matchedUser} />
        <Cta
          label={'Send All Emails'}
          message={'Look good?'}
          onClick={this.props.sendEmails}
        />
      </div>
    );
  }
}

export default EmailView;
