import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Timer,
  Answer,
  ConfigButton,
  Next,
  Title,
} from '../../components';
import { getStorage, setStorage } from '../../services';
import getApi from '../../services/api';
import './style.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      questions: [],
      questionNumber: 0,
      timeToAnswer: 0,
      timeUp: 0,
      ID: 0,
      buttonsOff: false,
      visibility: 'circle-visibility',
      isClicked: -1,
      isShuffed: false,
      currentAnswers: [],
    };
    this.handleApiRequisition = this.handleApiRequisition.bind(this);
    this.enableClock = this.enableClock.bind(this);
    this.changeTimer = this.changeTimer.bind(this);
    this.ClickOnTheAnswer = this.ClickOnTheAnswer.bind(this);
    this.disableButtons = this.disableButtons.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
    this.mountArrayWithAnswers = this.mountArrayWithAnswers.bind(this);
  }

  componentDidMount() {
    this.handleApiRequisition();
  }

  changeTimer() {
    const { timeUp, isClicked } = this.state;
    let newTimeUp = timeUp - Date.now();
    if (newTimeUp < 0) {
      newTimeUp = 0;
      this.setState({ timeToAnswer: newTimeUp });
      this.disableButtons(isClicked);
    }
    this.setState({ timeToAnswer: newTimeUp });
  }

  callAfterSaveTheState() {
    const interval = 200;
    const ID = setInterval(this.changeTimer, interval);
    this.setState({ ID });
  }

  enableClock() {
    const timeNow = Date.now();
    const timeToAnswer = 10000;
    const timeUp = timeNow + timeToAnswer;
    this.setState({
      timeUp,
      timeToAnswer,
    }, this.callAfterSaveTheState);
  }

  async handleApiRequisition() {
    const token = getStorage('token');
    const questionUrl = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const apiQuestionresult = await getApi(questionUrl);
    const { results } = apiQuestionresult;

    this.setState({
      isFetching: false,
      questions: results,
    }, this.enableClock());
  }

  // Retirado do Stackoverflow
  // https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it

  convert(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  contentHeader() {
    const { questionNumber, questions, timeUp } = this.state;
    const currentQuestion = questions[questionNumber];
    const { question, category } = currentQuestion;
    const milisecondToSecond = 1000;
    return (
      <div className="game-content-child game-header">
        <div className="game-flex-basis-corners" />
        <div className="game-flex-basis-center">
          <Title
            title={ this.convert(question) }
            dataTestid="question-text"
            subTitle2={ category }
            dataTestid2="question-category"
          />
        </div>
        <div className="game-flex-basis-corners">
          <Timer timer={ Math.ceil((timeUp - Date.now()) / milisecondToSecond) } />
        </div>
      </div>
    );
  }

  mountArrayWithAnswers(incorrectAnswers, correctAnswer) {
    let answers = incorrectAnswers.map((answer, index) => [
      index, 'wrong-answer', answer,
    ]);
    answers.push([answers.length, 'correct-answer', correctAnswer]);
    const half = 0.5;
    answers = answers.sort(() => Math.random() - half);
    this.setState({
      isShuffed: true,
      currentAnswers: answers,
    });
  }

  ClickOnTheAnswer(buttonNumberClicked) {
    this.disableButtons(buttonNumberClicked);
  }

  calculateScore() {
    const { questions, questionNumber, timeToAnswer } = this.state;
    const questionsDifficulty = ['nonUsed', 'easy', 'medium', 'hard'];
    const pointsCalcPattern = 10;
    const milisecondToSecond = 1000;
    const timer = Math.ceil(timeToAnswer / milisecondToSecond);
    return (
      pointsCalcPattern + (
        timer * questionsDifficulty.indexOf(questions[questionNumber].difficulty)
      )
    );
  }

  disableButtons(buttonNumberClicked) {
    this.setState({
      buttonsOff: true,
      visibility: '',
      isClicked: buttonNumberClicked,
    });
    const { ID } = this.state;
    clearInterval(ID);
    const { questionNumber, questions } = this.state;
    const currentQuestion = questions[questionNumber];
    const indexCorrectAnswer = currentQuestion.incorrect_answers.length;
    if (buttonNumberClicked === indexCorrectAnswer) {
      const state = getStorage('state');
      state.player.assertions += 1;
      state.player.score += this.calculateScore();

      setStorage('state', state);
    }
  }

  contentButtons() {
    const {
      questionNumber, questions, buttonsOff, isClicked, currentAnswers, isShuffed,
    } = this.state;
    const currentQuestion = questions[questionNumber];
    if (!isShuffed) {
      this.mountArrayWithAnswers(
        currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      );
    }
    return (
      <div className="game-content-child game-main">
        <div className="game-flex-basis-corners" />
        <div className="game-flex-basis-center">
          {
            currentAnswers.map((answer) => (
              <Answer
                key={ answer[0] }
                index={ answer[0] }
                text={ this.convert(answer[2]) }
                onClick={ this.ClickOnTheAnswer }
                isClicked={ isClicked }
                disableButtons={ buttonsOff }
                correctAnswerNumber={ currentAnswers.length - 1 }
                dataTestID={
                  (answer[0] === currentAnswers.length - 1)
                    ? (answer[1])
                    : (`${answer[1]}-${answer[0]}`)
                }
              />
            ))
          }
        </div>
        <div className="game-flex-basis-corners" />
      </div>
    );
  }

  handleClickNext() {
    const { questionNumber, questions } = this.state;
    if (questionNumber + 1 < questions.length) {
      this.setState({
        questionNumber: questionNumber + 1,
        buttonsOff: false,
        visibility: 'circle-visibility',
        isClicked: -1,
        isShuffed: false,
        currentAnswers: [],
      }, this.enableClock());
    } else {
      const ranking = getStorage('ranking');
      const state = getStorage('state');
      ranking[ranking.length - 1].score = state.player.score;
      setStorage('ranking', ranking);

      const { history } = this.props;
      history.push('/feedback');
    }
  }

  contentFooter() {
    const { visibility } = this.state;
    return (
      <div className="game-content-child game-footer">
        <div className="game-flex-basis-corners">
          <ConfigButton />
        </div>
        <div className="game-flex-basis-center">
          <Next
            dataTestid="btn-next"
            onClick={ this.handleClickNext }
            visibility={ visibility }
          />
        </div>
        <div className="game-flex-basis-corners" />
      </div>
    );
  }

  isLoading() {
    return (
      <div className="game-container">
        <Header />
        <div className="game-content">
          <div className="game-content-child game-header">
            <div className="game-flex-basis-corners" />
            <div className="game-flex-basis-center">
              <Title
                title=""
                dataTestid="question-text"
                subTitle2=""
                dataTestid2="question-category"
              />
            </div>
            <div className="game-flex-basis-corners">
              <Timer timer="0" />
            </div>
          </div>

          <div className="game-content-child game-main">
            <div className="game-flex-basis-corners" />
            <div className="game-flex-basis-center">
              <Answer
                key="0"
                index="0"
                text=""
                onClick={ this.ClickOnTheAnswer }
                isClicked={ false }
                disableButtons={ false }
                correctAnswerNumber={ 0 }
                dataTestID="wrong-answer-0"
              />
              <Answer
                key="1"
                index="1"
                text=""
                onClick={ this.ClickOnTheAnswer }
                isClicked={ false }
                disableButtons={ false }
                correctAnswerNumber={ 0 }
                dataTestID="correct-answer"
              />
            </div>
            <div className="game-flex-basis-corners" />
          </div>

          <div className="game-content-child game-footer">
            <div className="game-flex-basis-corners">
              <ConfigButton />
            </div>
            <div className="game-flex-basis-center">
              <Next
                dataTestid="btn-next"
                onClick={ this.handleClickNext }
                visibility={ false }
              />
            </div>
            <div className="game-flex-basis-corners" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return (
        <div>
          <h1>Loading</h1>
          <div>
            {/* {this.isLoading()} */}
          </div>
        </div>
      );
    }
    return (
      <div className="game-container">
        <Header />
        <div className="game-content">
          {this.contentHeader()}
          {this.contentButtons()}
          {this.contentFooter()}
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Game;
