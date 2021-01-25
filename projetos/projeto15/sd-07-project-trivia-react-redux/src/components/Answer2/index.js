import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Answer2 extends React.Component {
  constructor() {
    super();
    this.state = {
      // clicked: false,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  buttonClicked(index) {
    const { disableButtons, correctAnswerNumber } = this.props;
    let border = '';
    if (disableButtons === true) {
      if (index === correctAnswerNumber) {
        border = 'correct';
      } else {
        border = 'wrong';
      }
    }
    return border;
  }

  handleClick(index) {
    const { onClick } = this.props;
    onClick(index);
  }

  render() {
    const {
      text, dataTestID, index, disableButtons, correctAnswerNumber, isClicked,
    } = this.props;
    return (
      <button
        type="button"
        className={ `answer-box background-${index} ${this.buttonClicked(index)}` }
        data-testid={ dataTestID }
        disabled={ disableButtons }
        onClick={ () => this.handleClick(index) }
        onKeyDown={ () => this.handleClick(index) }
      >

        <span>1</span>
        <span className="message">{text}</span>
        <span>
          {
            ((disableButtons) && (isClicked === index)
            && (
              (index === correctAnswerNumber)
                ? ('C')
                : ('E')
            ))
          }
        </span>
      </button>
    );
  }
}

Answer2.propTypes = {
  text: PropTypes.string.isRequired,
  dataTestID: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  disableButtons: PropTypes.bool.isRequired,
  correctAnswerNumber: PropTypes.number.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

export default Answer2;
