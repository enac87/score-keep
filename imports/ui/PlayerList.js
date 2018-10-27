import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import {Players} from './../api/players';
import Player from './Player';

export default class PlayerList extends React.Component {
  getPlayers(playersList) {
    if(this.props.players.length === 0){
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started !</p>
        </div>
      );
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
        <FlipMove maintainContainerHeight={true}>
          {this.getPlayers(this.props.players)}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
