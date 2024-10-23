const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next state:", store.getState());
  console.groupEnd();
  return result;
};

export default loggerMiddleware;
