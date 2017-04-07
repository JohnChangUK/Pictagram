import constants from '../constants';

var initialState = {

};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type) {
    case constants.POST_RECEIVED:
      console.log('POSTS_RECEIVED: ' + JSON.stringify(action.posts));
      
    return updated;

    default:
      return updated;
  }

};