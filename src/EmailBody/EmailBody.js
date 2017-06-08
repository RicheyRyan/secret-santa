import React from 'react';
import './EmailBody.css';
import { getUsersName } from '../Utils/user.js';

export default props =>
  <div className="email-body">
    <p>Hi {props.user.name.first},</p>
    <p>Welcome to Secret Santa!</p>
    <p>
      You've been chosen to get a gift for {getUsersName(props.matchedUser)}.
    </p>
    <p>Make sure you get them something nice.</p>
    <p>All the best,</p>
    <p>The Secret Santa Team</p>
  </div>;
