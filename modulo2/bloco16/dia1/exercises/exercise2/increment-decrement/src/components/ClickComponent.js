import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plus, minus } from '../actions';

class ClickComponent extends Component {
  // constructor() {
  //   super();
  //   this.updateInput = this.updateInput.bind(this);
  // }

  updateInput(event) {
    document.getElementsByName(event.target.name)[0].value = event.target.value;
  }

  onClickHandle(method, inputName) {
    const value = document.getElementsByName(inputName)[0].value;
    this.props[method](value)
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="plus">Valor à incrementar:</label>
          <input
            type="number"
            defaultValue="0"
            onChange={(event) => this.updateInput(event)}
            name="plus"
          />
          <button onClick={() => this.onClickHandle('add', 'plus')}>Incrementar</button>
        </div>
        <div>
          <label htmlFor="minus">Valor à decrementar:</label>
          <input
            type="number"
            defaultValue="0"
            onChange={(event) => this.updateInput(event)}
            name="minus"
          />
          <button onClick={() => this.onClickHandle('subtract', 'minus')}>Decrementar</button>
        </div>
        <div>
          <p>Valor atual: <strong>{this.props.print.value}</strong></p>
          <p>Número de cliques: <strong>{this.props.print.clickCount}</strong></p>
          <p>
            <span>Array com valores incrementados:[</span>
            {
              this.props.print.array.map((item, index) => <span key={index}><strong> {item}</strong>,</span>)
            }
            <span>]</span>
          </p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: value => dispatch(plus(value)),
  subtract: value => dispatch(minus(value)),
});

const mapStateToProps = state => ({
  print: state.changeValueReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(ClickComponent);
