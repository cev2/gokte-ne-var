const Discord = require('discord.js'), 
      client = new Discord.Client({ ws: { intents: Discord.Intents.ALL }}), 
      ytdlDiscord = require("discord-ytdl-core");

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Gökte ne var?" } });
});

client.on('ready', () => {
  
    client.channels.cache.get('856844774203457557').join().then(music => {
      music.voice.setSelfDeaf(true);
      client.on('voiceStateUpdate', (youth, guild) => {
        if (!youth.channel && guild.channel && guild.channel.id == '856844774203457557') {
            setTimeout(() => music.play('GökteNeVar.mp3'), 3000); // sesi kanala girişten 3 saniye sonra çalar
        };
      });
    });
});
client.login("ODU2ODY3OTEzOTkwMDEyOTY5.YNHSbg.CA5jkMSkCR16VmukdkE9TFojIoo").then(c => console.log(`${client.user.tag} olarak bot başladı.`)).catch(err => console.error("Bota başlarken bir hata çıktı!"));