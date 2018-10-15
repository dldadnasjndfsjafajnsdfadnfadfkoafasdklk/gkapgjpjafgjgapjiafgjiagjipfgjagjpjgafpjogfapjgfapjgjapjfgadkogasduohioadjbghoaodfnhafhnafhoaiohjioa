const Discord = require("discord.js");
const client = new Discord.Client();
const edwarddev = ["476503634411257858","360095764535312385","433600043870846989","389136174154907651"]
client.on('ready' , ready => {
client.user.setGame("BANK IS READY 4 YOU" , "https://twitch.tv/ichbinxirdx");
});


client.on('message', message => {
  if (!edwarddev.(include.id)) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



client.login(process.env.BOT_TOKEN)
