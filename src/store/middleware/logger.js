const logger = (param) => (store) => (next) => (action) => {
  console.log("logging", param);
  return next(action);
};

export default logger;
