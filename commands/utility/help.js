const { prefix } = require("../../config.json");

module.exports = {
  name: "help",
  description:
    "List of all available commands or info about a specific command.",
  usage: "[command name]",
  cooldown: 5,
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
      commands
        .filter((command) => command.name !== "help")
        .sort((c1, c2) => c1.name.localeCompare(c2.name))
        .forEach((command) =>
          data.push(`\`${command.name}\` - ${command.description}`)
        );
      data.push(
        `\nSend \`${prefix}help [command name]\` to get more info about a specific command\nʕ•́ᴥ•̀ʔっ♡`
      );

      return message.author
        .send(data, { split: true })
        .then(() => {
          if (message.channel.type === "dm") return;
          message.reply("I've sent you a DM with all my commands!");
        })
        .catch((error) => {
          console.error(
            `Could not send help DM to ${message.author.tag}.\n`,
            error
          );
          message.reply("It seems like I can't DM you!");
        });
    }

    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("That's not a valid command 🦄");
    }

    data.push(`**Name:** ${command.name}`);

    if (command.aliases)
      data.push(`**Aliases:** ${command.aliases.join(", ")}`);
    if (command.description)
      data.push(`**Description:** ${command.description}`);
    if (command.usage)
      data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

    message.channel.send(data, { split: true });
  },
};
