import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

// Tracker.autorun(function () {
//   console.log('Players list', Players.find().fetch());
// });

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if(playerName){
    e.target.playerName.value = '';
    // Insert the player
    Players.insert({
      name: playerName,
      score: 0
    });
  }
}

Meteor.startup(function () {

  Tracker.autorun(function () {

    const players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Emaga';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
