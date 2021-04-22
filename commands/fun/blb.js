const request = require("request");

const { getRandomNumber } = require("../../helpers.js");

module.exports = {
  name: "blb",
  description: "Be Like Bill meme generator",
  usage: "[name m|f]",
  execute(message, args) {
    const name = args[0];

    let url = "https://belikebill.ga/billgen-API.php?default=1";
    if (name) {
      const sex = args[1]?.toLowerCase().startsWith("f") ? "f" : "m";
      url += `&name=${encodeURI(name)}&sex=${sex}`;
    }

    message.channel.send("", {
      files: [
        {
          attachment: url,
          name: `${getRandomNumber(100000000, 9999999999)}.jpg`,
        },
      ],
    });
  },
};
