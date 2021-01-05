import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.reload = this.reload.bind(this);
    this.state = {
      value: 'ReactJS',
      time: '',
    };
  }

  componentDidMount() {
    this.props.fetchPosts(this.state.value);
    this.dateUpdate();
  }
  
  dateUpdate() {
    const dateNow = new Date();
    const hour = ("00" + dateNow.getHours()).slice(-2);
    const minute = ("00" + dateNow.getMinutes()).slice(-2);
    const second = ("00" + dateNow.getSeconds()).slice(-2);
    this.setState({
      time: `${hour}:${minute}:${second}`,
    });
  }

  handleChange(event) {
    this.setState(
      {
        value: event.target.value,
      },
      () => this.props.fetchPosts(this.state.value)
    );
    this.dateUpdate();
  }

  reload() {
    this.props.fetchPosts(this.state.value)
    this.dateUpdate();
  }

  render() {
    const { value } = this.state;
    const { error, loading } = this.props;
    return (
      <div className="header-container">
        <h2 className="header-title">{`Selecionado: ${value}`}</h2>
        <label value={value} className="header-label" htmlFor="subreddits">
          Escolha a categoria:
        </label>
        <select
          className="header-select"
          name="subreddits"
          onChange={this.handleChange}
        >
          <option value="ReactJS" onClick={(event) => this.handleChange(event)}>
            ReactJS
          </option>
          <option
            value="Frontend"
            onClick={(event) => this.handleChange(event)}
          >
            Frontend
          </option>
        </select>
        {!(loading || error) && (
          <div className="header-lastUpdate">
            <span >{`Última atualização em ${this.state.time}`}</span>
            <button onClick={this.reload} className="header-button">Reload</button>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (keyWord) => dispatch(fetchPosts(keyWord)),
});

const mapStateToProps = (state) => ({
  post: state.posts.post,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
