const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: "n",
  description: "Make the bot say Bunny Bunny! (Inspired by Kelvin Zhang aka Twilight)",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const user = interaction.user;
      const message = `Bun**ny Bu**nny!`;

      interaction.reply({
        content: `${user}, ${message}`,
        ephemeral: true // If you want to make the response visible only to the user who triggered the command
      }).catch(e => {
        console.error(e);
      });
    } catch (e) {
      console.error(e);
    }
  },
};
