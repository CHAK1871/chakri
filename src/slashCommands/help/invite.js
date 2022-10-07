const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'invite of the bot',
  run: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setColor('Green')
    .setDescription(`Invite Link:- [Click Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`);

    return interaction.reply({
      embeds: [embed],
    });
  },
};