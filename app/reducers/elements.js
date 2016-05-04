const initialState = {
  drawer: true,
}


function elements(state, action) {
  if (typeof state === 'undefined') return initialState;

  switch(action.type) {
    case 'TOGGLE_DRAWER':
      return Object.assign({}, state, {
        drawer: !state.drawer,
      });
    default:
      return state;
  }
}

export default elements;
