const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'skip',
  description: 'Skips the current track',
  inVc: true,
  sameVc: true,
  player: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);


    player.stop();

    const embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription('Skipped the current track');

    interaction.reply({ embeds: [embed] });
  },
};
