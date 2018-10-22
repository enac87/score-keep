import React from 'react';

import {Players} from './../api/players';

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

export default class AddPlayer extends React.Component {
  render(){
    return(
      <form onSubmit={handleSubmit}>
        <input type="text" name="playerName" placeholder="Player name" />
        <button>Add Player</button>
      </form>
    );
  }
}
