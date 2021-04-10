/** Returns a random number between min (inclusive) and max (exclusive) */
const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min) + min);

module.exports = {
  getRandomNumber,
};
