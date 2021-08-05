const Discord = require('discord.js'), 
      client = new Discord.Client({ ws: { intents: Discord.Intents.ALL }}), 
      ytdlDiscord = require("discord-ytdl-core");

client.on("ready", async () => {
  client.user.setPresence({ activity: { name: "Gökte ne var?" } });
});

client.on('ready', () => {
  
    client.channels.cache.get('seskanalıd').join().then(music => {
      music.voice.setSelfDeaf(true);
      client.on('voiceStateUpdate', (youth, guild) => {
        if (!youth.channel && guild.channel && guild.channel.id == 'seskanalıd') {
            setTimeout(() => music.play('GökteNeVar.mp3'), 3000); //Burada sesli kanala girdikten sonra müziğin ne zaman çalıcağını yazarsınız şuan 3 saniye sonra çalacaktır.
        };
      });
    });
});
client.login("token").then(c => console.log(`${client.user.tag} olarak bot başladı.`)).catch(err => console.error("Bota başlarken bir hata çıktı!"));