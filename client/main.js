import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayersPosition} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    let positionedPlayers = calculatePlayersPosition(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
  });
});
