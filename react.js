const { getRandomNumber } = require("./helpers.js");

const boobaEmoji = "808653159630241792";
const monkaChristEmoji = "570861366777348108";
const areYouKiddingMeEmoji = "808650707204702249";
const pepePunch1Emoji = "808653159425507359";
const pepePunch2Emoji = "808653159769178152";

const reactToMessage = (message) => {
  const roll = getRandomNumber(1, 16);

  if (roll === 1) {
    message
      .react("🏳️‍🌈")
      .then(() => message.react("🇬"))
      .then(() => message.react("🇦"))
      .then(() => message.react("🇾"))
      .then(() => message.react("🇱"))
      .then(() => message.react("🇴"))
      .then(() => message.react("🇷"))
      .then(() => message.react("🇩"))
      .then(() => message.react("👑"))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 2) {
    message
      .react("🅱️")
      .then(() => message.react("🇴"))
      .then(() => message.react("⭕"))
      .then(() => message.react("🇧"))
      .then(() => message.react("🇦"))
      .then(() => message.react(boobaEmoji))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 3) {
    message
      .react(monkaChristEmoji)
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 4) {
    message
      .react(areYouKiddingMeEmoji)
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 5) {
    message
      .react("❤️")
      .then(() => message.react("🧡"))
      .then(() => message.react("💛"))
      .then(() => message.react("💚"))
      .then(() => message.react("💙"))
      .then(() => message.react("💜"))
      .then(() => message.react("🖤"))
      .then(() => message.react("🤍"))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 6) {
    message
      .react(monkaChristEmoji)
      .then(() => message.react("🦠"))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 7) {
    message
      .react("😳")
      .then(() => message.react("👉"))
      .then(() => message.react("👈"))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 8) {
    message
      .react("🤡")
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 9) {
    message
      .react("👽")
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 10) {
    message
      .react("🔥")
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 11) {
    message
      .react("🔥")
      .then(() => message.react("👌"))
      .then(() => message.react("😂"))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 12) {
    message
      .react("🤪")
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 13) {
    message
      .react(pepePunch1Emoji)
      .then(() => message.react(pepePunch2Emoji))
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 14) {
    message
      .react("💩")
      .catch(() => console.error("One of the emojis failed to react."));
  } else if (roll === 15) {
    message
      .react("♿️")
      .catch(() => console.error("One of the emojis failed to react."));
  }
};

module.exports = {
  reactToMessage,
};
