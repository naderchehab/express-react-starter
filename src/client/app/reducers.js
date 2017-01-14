import deepFreeze from 'deep-freeze';
import actions from './actions';

export default (state = {}, action) => {
  deepFreeze(state);
  switch (action.type) {
    case 'DO_THING':
      return actions.handleDoThing(state);
    default:
      return actions.getDefaultState();
  }
};
