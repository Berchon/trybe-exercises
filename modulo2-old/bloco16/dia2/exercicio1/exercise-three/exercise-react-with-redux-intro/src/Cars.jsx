import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { connect } from 'react-redux';
import { moveCar } from './redux/actions/CarAction';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">Move</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

const mapStateToProps = state => ({
  redCar: state.CarReducer.cars.red,
  blueCar: state.CarReducer.cars.blue,
  yellowCar: state.CarReducer.cars.yellow,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);