const { MessageEmbed } = require('discord.js');
const timeFormat = require('../util/timeFormat');

module.exports = {
  name: 'queue',
  aliases: ['q', 'fila'],
  description: 'Veja as músicas que estão na fila para serem tocadas.',
  guildOnly: true,
  cooldown: 2,
  async execute(client, message, args, serverQueue, queue, youtube) {
    if (serverQueue) {
      const embed = new MessageEmbed()
        .setColor('#FCDFA6')
        .setTitle('Fila de musicas')
        .setTimestamp()
        .setFooter(`Pedido por ${message.member.user.tag}`);

      serverQueue.songs.forEach((song, index) => {
        embed.addField(`#${index + 1} - ${song.title}`, `${song.author} - ${timeFormat(song.length)}`);
      });

      return message.channel.send(embed);
    }
    return message.channel.send('Nenhuma música na fila!');
  },
};
