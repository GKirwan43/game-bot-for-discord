const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  var cmd= message.content.split("-")
  console.log(cmd)

  if (cmd === `playgamerolldice`){
    message.channel.send("Rolling Dice... You rolled a 5!");
  }else if (cmd === `playgame`){
    message.channel.send("Select a game");
  }
});

bot.login(process.env.token);
