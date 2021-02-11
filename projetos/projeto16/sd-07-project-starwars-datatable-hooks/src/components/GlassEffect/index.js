import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class GlassEffect extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="background1">
        <div className="child">{children}</div>
      </section>
    );
  }
}

GlassEffect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GlassEffect;
