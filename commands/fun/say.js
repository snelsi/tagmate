const getEmojiText = (text = "") =>
  text
    .replace(/ /gi, "  ")
    .replace(/a/gi, "🇦 ")
    .replace(/b/gi, "🇧 ")
    .replace(/c/gi, "🇨 ")
    .replace(/d/gi, "🇩 ")
    .replace(/e/gi, "🇪 ")
    .replace(/f/gi, "🇫 ")
    .replace(/g/gi, "🇬 ")
    .replace(/h/gi, "🇭 ")
    .replace(/i/gi, "🇮 ")
    .replace(/j/gi, "🇯 ")
    .replace(/k/gi, "🇰 ")
    .replace(/l/gi, "🇱 ")
    .replace(/m/gi, "🇲 ")
    .replace(/n/gi, "🇳 ")
    .replace(/o/gi, "🇴 ")
    .replace(/p/gi, "🇵 ")
    .replace(/q/gi, "🇶 ")
    .replace(/r/gi, "🇷 ")
    .replace(/s/gi, "🇸 ")
    .replace(/t/gi, "🇹 ")
    .replace(/u/gi, "🇺 ")
    .replace(/v/gi, "🇻 ")
    .replace(/w/gi, "🇼 ")
    .replace(/x/gi, "🇽 ")
    .replace(/y/gi, "🇾 ")
    .replace(/z/gi, "🇿 ")
    .replace(/0/gi, "0️⃣ ")
    .replace(/1/gi, "1️⃣ ")
    .replace(/2/gi, "2️⃣ ")
    .replace(/3/gi, "3️⃣ ")
    .replace(/4/gi, "4️⃣ ")
    .replace(/5/gi, "5️⃣ ")
    .replace(/6/gi, "6️⃣ ")
    .replace(/7/gi, "7️⃣ ")
    .replace(/8/gi, "8️⃣ ")
    .replace(/9/gi, "9️⃣ ")
    .replace(/#/gi, "#️⃣ ")
    .replace(/\*/gi, "*️⃣ ")
    .replace(/\?/gi, "❓ ")
    .replace(/!/gi, "❗️ ")
    .replace(/\,/gi, " ")
    .replace(/\./gi, " ")
    .trim();

module.exports = {
  name: "say",
  description: "Transforms text into emojis",
  args: true,
  usage: "Hello World!",
  execute(message, args) {
    const lines = args.join(" ").split("\n");
    lines.forEach((line) => {
      const emojiText = getEmojiText(line);
      if (emojiText) {
        message.channel.send(emojiText);
      }
    });
  },
};
