export default function promiseMiddleware() {
  return store => next => action => {
    const {payload, types} = action;

    // Only act on Promise payloads
    if (!payload || typeof payload.then === 'undefined') {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({type: REQUEST});

    payload.then(
      result => next({payload: result, type: SUCCESS}),
      error => next({payload: error, error: true, type: FAILURE})
    ).catch(error => {
      console.error('MIDDLEWARE ERROR:', error);
      next({payload: error, error: true, type: FAILURE});
    });

    return payload;
  };
}
