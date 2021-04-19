/** Returns a random number between min (inclusive) and max (exclusive) */
const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min) + min);

const getUserFromMention = (mention, client) => {
  if (!mention) return;

  // The id is the first and only match found by the RegEx.
  const matches = mention.match(/^<@!?(\d+)>$/);

  // If supplied variable was not a mention, matches will be null
  if (!matches) return;

  const id = matches[1];

  return client.users.cache.get(id);
};

module.exports = {
  getRandomNumber,
  getUserFromMention,
};
