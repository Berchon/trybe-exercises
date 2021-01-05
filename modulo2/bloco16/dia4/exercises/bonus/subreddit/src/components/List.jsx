import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list.css';

class List extends Component {
  render() {
    const { post, error, loading } = this.props;
    return (loading) ? (
      <span className="list">Carregando os dados...</span>
    ) : error ? (
      <span className="list">Não foi possível atender sua solicitação! Tente mais tarde.</span>
    ) : (
      <div>
        {post.map((item, index) => <span className="list" key={index}>{item}</span>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
  loading: state.posts.loading,
  error: state.posts.error,
});

export default connect(mapStateToProps)(List);
