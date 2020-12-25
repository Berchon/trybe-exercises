import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actions/TrafficAction';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        <button onClick={() => changeSignal('green')} type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.TrafficReducer.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: payload => dispatch(changeSignal(payload))
});

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
