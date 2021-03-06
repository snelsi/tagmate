const getRandomNumber = require("lodash/random");

const boobaEmoji = "808653159630241792";
const monkaChristEmoji = "570861366777348108";
const areYouKiddingMeEmoji = "808650707204702249";
const pepePunch1Emoji = "808653159425507359";
const pepePunch2Emoji = "808653159769178152";
const max1 = "818779291651145760";
const max2 = "818779369165553674";
const max3 = "818779410513133568";

const reactToMessage = (message) => {
  const roll = getRandomNumber(1, 18);

  if (roll === 1) {
    message
      .react("๐ณ๏ธโ๐")
      .then(() => message.react("๐ฌ"))
      .then(() => message.react("๐ฆ"))
      .then(() => message.react("๐พ"))
      .then(() => message.react("๐ฑ"))
      .then(() => message.react("๐ด"))
      .then(() => message.react("๐ท"))
      .then(() => message.react("๐ฉ"))
      .then(() => message.react("๐"))
      .catch(() => console.error("[1] One of the emojis failed to react."));
  } else if (roll === 2) {
    message
      .react("๐ฑ๏ธ")
      .then(() => message.react("๐ด"))
      .then(() => message.react("โญ"))
      .then(() => message.react("๐ง"))
      .then(() => message.react("๐ฆ"))
      .then(() => message.react(boobaEmoji))
      .catch(() => console.error("[2] One of the emojis failed to react."));
  } else if (roll === 3) {
    message
      .react(monkaChristEmoji)
      .catch(() => console.error("[3] One of the emojis failed to react."));
  } else if (roll === 4) {
    message
      .react(areYouKiddingMeEmoji)
      .catch(() => console.error("[4] One of the emojis failed to react."));
  } else if (roll === 5) {
    message
      .react("โค๏ธ")
      .then(() => message.react("๐งก"))
      .then(() => message.react("๐"))
      .then(() => message.react("๐"))
      .then(() => message.react("๐"))
      .then(() => message.react("๐"))
      .then(() => message.react("๐ค"))
      .then(() => message.react("๐ค"))
      .catch(() => console.error("[5] One of the emojis failed to react."));
  } else if (roll === 6) {
    message
      .react(monkaChristEmoji)
      .then(() => message.react("๐ฆ?"))
      .catch(() => console.error("[6] One of the emojis failed to react."));
  } else if (roll === 7) {
    message
      .react("๐ณ")
      .then(() => message.react("๐"))
      .then(() => message.react("๐"))
      .catch(() => console.error("[7] One of the emojis failed to react."));
  } else if (roll === 8) {
    message
      .react("๐คก")
      .catch(() => console.error("[8] One of the emojis failed to react."));
  } else if (roll === 9) {
    message
      .react("๐ฝ")
      .catch(() => console.error("[9] One of the emojis failed to react."));
  } else if (roll === 10) {
    message
      .react("๐ฅ")
      .catch(() => console.error("[10] One of the emojis failed to react."));
  } else if (roll === 11) {
    message
      .react("๐ฅ")
      .then(() => message.react("๐"))
      .then(() => message.react("๐"))
      .catch(() => console.error("[11] One of the emojis failed to react."));
  } else if (roll === 12) {
    message
      .react("๐คช")
      .catch(() => console.error("[12] One of the emojis failed to react."));
  } else if (roll === 13) {
    message
      .react(pepePunch1Emoji)
      .then(() => message.react(pepePunch2Emoji))
      .catch(() => console.error("[13] One of the emojis failed to react."));
  } else if (roll === 14) {
    message
      .react("๐ฉ")
      .catch(() => console.error("[14] One of the emojis failed to react."));
  } else if (roll === 15) {
    message
      .react("โฟ๏ธ")
      .catch(() => console.error("[15] One of the emojis failed to react."));
  } else if (roll === 16) {
    message
      .react("๐จ")
      .then(() => message.react("๐ท"))
      .then(() => message.react("๐ฎ"))
      .then(() => message.react("๐ณ"))
      .then(() => message.react("๐ฌ"))
      .then(() => message.react("๐ช"))
      .catch(() => console.error("[16] One of the emojis failed to react."));
  } else if (roll === 17) {
    message
      .react(max1)
      .then(() => message.react(max2))
      .then(() => message.react(max3))
      .catch(() => console.error("[17] One of the emojis failed to react."));
  }
};

module.exports = {
  reactToMessage,
};
