const initialState = {
  pending: true,
  team: {},
  user: {},
};


function config(state, action) {
  if (typeof state === 'undefined') return initialState;

  switch (action.type) {
    case 'GET_CONFIG':
      return action.payload;
    default:
      return state;
  }
}

export default config;
