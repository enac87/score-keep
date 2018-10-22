import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

// Tracker.autorun(function () {
//   console.log('Players list', Players.find().fetch());
// });

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => updateScore(player._id, -1)}>-1</button>
        <button onClick={() => updateScore(player._id, 1)}>+1</button>
        <button onClick={() => removeEntry(player._id)}>X</button>
      </p>
    );
  });
};

const updateScore = (id, newScore) => {
  Players.update(
    { _id: id },
    {$inc: {score: newScore}}
  );
};

const removeEntry = (id) => {
  Players.remove({ _id: id });
};


Meteor.startup(() => {

  Tracker.autorun(() => {

    const players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Emaga';
    let jsx = (
      <div>
        <TitleBar title={title}/>
        {renderPlayers(players)}
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
