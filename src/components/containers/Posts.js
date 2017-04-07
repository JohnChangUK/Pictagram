import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Posts extends Component {

  componentDidMount() {
    APIManager
    .get('/api/post', null)
    .then(response => {
      console.log("RESPONSE: " + JSON.stringify(response));
    })
    .catch((err) => {
      console.log("ERROR: " + err);
    });
  }

  render() {
    return (
        <div>
          Posts Container
        </div>
      );
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchPosts: (params) = dispatch(action.fetchPosts(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts);