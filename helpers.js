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
  getUserFromMention,
};
