const { getUserFromMention } = require("../../helpers.js");

module.exports = {
  name: "chel",
  description: "Чел, ты...",
  usage: "[@userTag]",
  execute(message, args) {
    const user = getUserFromMention(args[1], message.client);

    if (user) {
      message.channel.send(`${user}  🇨 🇭 🇪 🇱   🇹 🇮  ▫️ ▫️ ▫️`);
    } else {
      message.reply("🇨 🇭 🇪 🇱   🇹 🇮  ▫️ ▫️ ▫️");
    }
  },
};
