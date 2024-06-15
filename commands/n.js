const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "n",
  description: "Make the bot say Bunny Bunny! with the middle part bolded.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const boldMessage = "Bun**ny Bu**nny!";

      const embed = new MessageEmbed()
        .setColor(client.config.embedColor)
        .setDescription(boldMessage);

      interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
