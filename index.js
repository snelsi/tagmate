const dotenv = require("dotenv");
dotenv.config();

const { prefix } = require("./config.json");
const { reactToMessage } = require("./react.js");
const { getRandomNumber } = require("./helpers.js");

const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Bot is ready! Beep boop! 🤖");
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  }
  // React to random messages
  else {
    const roll = getRandomNumber();

    if (roll === 0) {
      reactToMessage(message);
    }
  }
});

client.login(process.env.TOKEN);
