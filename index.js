require("dotenv").config();

const { prefix } = require("./config.json");
const { reactToMessage } = require("./react.js");
const { getRandomNumber } = require("./helpers.js");
const { getStalkerJoke } = require("./jokes.js");
const { getEmojiText } = require("./emojiText.js");
const { startNew2048Game } = require("./2048.js");
const { chelTi } = require("./chel.js");

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
    if (command === "joke") {
      message.reply(`\n${getStalkerJoke(args[0])}`);
    } else if (command === "say") {
      const lines = args.join(" ").split("\n");
      lines.forEach((line) => {
        const emojiText = getEmojiText(line);
        if (emojiText) {
          message.channel.send(emojiText);
        }
      });
    } else if (command === "2048") {
      startNew2048Game(message);
    } else if (command === "chel") {
      chelTi(message, client);
    }
  }
  // React to random messages
  else {
    const roll = getRandomNumber(0, 10);

    if (roll === 0) {
      reactToMessage(message);
    }
  }
});

client.login();
