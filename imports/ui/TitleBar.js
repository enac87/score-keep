import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  rendersubtitle(){
    if(this.props.subtitle){
      return <h3 className="title-bar__subtitle"><em>{this.props.subtitle}</em></h3>;
    }
  }

  render(){
    return(
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.rendersubtitle()}
        </div>
      </div>
    );
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
