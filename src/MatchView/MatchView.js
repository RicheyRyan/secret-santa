import React from 'react';
import './MatchView.css';
import Loading from '../Loading/Loading.js';
import Cta from '../Cta/Cta.js';
import { getUsersName } from '../Utils/user.js';

const MatchView = props =>
  props.matches
    ? <div>
        <ul className="match-list">
          {props.users.items.map(user => {
            const { guid } = user;
            const matchId = props.matches[guid];
            const matchUser = props.users.byId[matchId];
            return (
              <li key={guid}>
                <div className="match-name">{getUsersName(user)}</div>
                <div className="match-middle-text">was matched with</div>
                <div className="match-name">{getUsersName(matchUser)}</div>
              </li>
            );
          })}
        </ul>
        <Cta
          label={'Reshuffle'}
          message={'Dont like the matches?'}
          onClick={props.reshuffle}
        />
        <Cta
          label={'Preview Emails'}
          message={'Happy?'}
          onClick={props.toggleEmailView}
        />
      </div>
    : <Loading />;

export default MatchView;
