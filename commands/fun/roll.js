const { getRandomNumber } = require("../../helpers.js");

module.exports = {
  name: "roll",
  description: "Roll random number in chat",
  usage: "[0 100]",
  cooldown: 1,
  execute(message, args) {
    let min = 0;
    let max = 100;
    const parsed1 = Number.parseInt(args[0]);
    const parsed2 = Number.parseInt(args[1]);
    if (!Number.isNaN(parsed2)) {
      max = parsed2;
      if (!Number.isNaN(parsed1)) {
        min = parsed1;
      }
    } else if (!Number.isNaN(parsed1)) {
      max = parsed1;
    }
    message.channel.send(
      `${message.author} rolled ${getRandomNumber(min, max)} (${min}, ${max})`
    );
  },
};
