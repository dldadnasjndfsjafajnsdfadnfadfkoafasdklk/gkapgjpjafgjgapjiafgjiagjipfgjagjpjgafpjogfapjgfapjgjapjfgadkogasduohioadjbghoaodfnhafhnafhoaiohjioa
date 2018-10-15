const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready' , ready => {
client.user.setGame("BANK IS READY 4 YOU" , "https://twitch.tv/ichbinxirdx");
});
client.login(procces.env.BOT_TOKEN)
