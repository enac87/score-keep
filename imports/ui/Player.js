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
      <div key={this.props.player._id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button buton--round" onClick={() => this.updateScore(this.props.player._id, -1)}>-1</button>
            <button className="button buton--round" onClick={() => this.updateScore(this.props.player._id, 1)}>+1</button>
            <button className="button buton--round" onClick={() => this.removeEntry(this.props.player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};
