const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'help page of bot',
  run: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription(`**__MUSIC COMMANDS__**\n\n> \`play, join, skip, queue, shuffle, volume, remove, resume, seek, clearqueue, disconnect, loop, move\`\n\n**__INFO COMMANDS__**\n\n> \`help, invite, ping\``);

    return interaction.reply({
      embeds: [embed],
    });
  },
};