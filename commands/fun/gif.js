const request = require("request");
const getRandomNumber = require("lodash/random");
const sample = require("lodash/sample");

module.exports = {
  name: "gif",
  description: "Get random gif from Giphy",
  usage: "[search]",
  execute(message, args) {
    const search = args.join(" ").trim();

    let api = search
      ? `https://g.tenor.com/v1/random?q=${encodeURI(search)}&limit=1`
      : `https://g.tenor.com/v1/trending?limit=20`;

    api += `&key=${encodeURI(process.env.TENOR_API_KEY)}`;
    api += "&contentfilter=low";
    api += "&ar_range=standard";

    return request(api, { json: true }, (err, res, body) => {
      if (err || !body) return message.reply(err || "An error occurred, sorry");

      try {
        const gif = sample(body.results);

        if (!gif) return message.reply("No gifs found 😢");

        const url = gif.url;

        return message.reply(url);
      } catch (e) {
        console.error(e);
        message.reply("An error occurred, sorry");
      }
    });
  },
};
