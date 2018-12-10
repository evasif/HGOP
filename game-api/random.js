module.exports = function(context) {
  return {
    randomInt: (min, max) => Math.floor(Math.random() * (max - min) + min),
  };
};
