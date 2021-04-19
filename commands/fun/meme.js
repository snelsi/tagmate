const request = require("request");

// API: https://github.com/D3vd/Meme_Api

module.exports = {
  name: "meme",
  description: "Get random reddit meme",
  usage: "[subreddit count]",
  execute(message, args) {
    const [subReddit, count] = args;

    // Random meme
    let api = "https://meme-api.herokuapp.com/gimme";
    // From specific sub-reddit
    if (subReddit) {
      api += `/${subReddit}`;
      // Amount of memes
      if (count) {
        let c = Number.parseInt(count);
        if (!Number.isNaN(c) && count > 1) {
          c = Math.min(c, 10);
          api += `/${count}`;
        }
      }
    }

    return request(api, { json: true }, (err, res, body) => {
      if (err) {
        return message.reply(err);
      }
      // Handle multiple memes
      if (body.memes) {
        return message.reply("", {
          files: body.memes.map((meme) => meme.url),
        });
      }
      // Handle single meme
      return message.reply("", {
        files: [body.url],
      });
    });
  },
};
