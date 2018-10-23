import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';
import Player from './Player';

export default class PlayerList extends React.Component {
  getPlayers(playersList) {
    if(this.props.players.length === 0){
      return <p>Add your first player to get started !</p>;
    } else {
      return playersList.map(function(player) {
        return (
          <Player key={player._id} player={player} />
        );
      });
    }
  };

  render(){
    return(
      <div>
        {this.getPlayers(this.props.players)}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
