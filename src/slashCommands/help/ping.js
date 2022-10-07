const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'ping of the bot',
  run: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setColor('Green')
    .setDescription(`Ping:- \`${client.ws.ping}ms\``);

    return interaction.reply({
      embeds: [embed],
    });
  },
};