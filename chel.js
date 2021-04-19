const { getUserFromMention } = require("./helpers.js");
const { prefix } = require("./config.json");

const chelTi = (message, client) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const user = getUserFromMention(args[1], client);

  if (user) {
    message.channel.send(`${user}  🇨 🇭 🇪 🇱   🇹 🇮  ▫️ ▫️ ▫️`);
  } else {
    message.reply("🇨 🇭 🇪 🇱   🇹 🇮  ▫️ ▫️ ▫️");
  }
};

module.exports = {
  chelTi,
};
