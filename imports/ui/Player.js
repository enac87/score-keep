import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Player extends React.Component {
  updateScore(id, newScore){
    Players.update(
      { _id: id },
      {$inc: {score: newScore}}
    );
  };

  removeEntry(id){
    Players.remove({ _id: id });
  };

  render(){
    return(
      <div>
        <p key={this.props.player._id}>
          {this.props.player.name} has {this.props.player.score} point(s).
          <button onClick={() => this.updateScore(this.props.player._id, -1)}>-1</button>
          <button onClick={() => this.updateScore(this.props.player._id, 1)}>+1</button>
          <button onClick={() => this.removeEntry(this.props.player._id)}>X</button>
        </p>
      </div>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};
