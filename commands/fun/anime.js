const request = require("request");

const options = {
  url: "https://api.computerfreaker.cf/v1/anime",
  headers: {
    "User-Agent": "request",
  },
};

module.exports = {
  name: "anime",
  description: "Get random anime image",
  execute(message) {
    return request(options, (err, res, body) => {
      if (err) {
        return message.reply(err);
      }
      // Handle single meme
      const result = JSON.parse(body);

      if (result?.url) {
        return message.reply(result.url);
      }
    });
  },
};
