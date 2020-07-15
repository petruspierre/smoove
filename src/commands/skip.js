module.exports = {
  name: 'skip',
  aliases: ['sk'],
  description: 'Pula a música que está tocando.',
  guildOnly: true,
  usage: '',
  cooldown: 2,
  async execute(client, message, args, serverQueue, queue, youtube) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.channel.send(
        'Você precisa estar em um canal de voz para executar este comando!',
      );
    }

    if (serverQueue) {
      serverQueue.connection.dispatcher.end();
      return message.channel.send('Pulando a música atual');
    }
    return message.channel.send('Não estou tocando nada no momento!');
  },
};
