const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  var prefix = '!g';
  var cmd= message.content.split(prefix)[1]
  console.log(cmd)

  if (cmd === "roll dice"){
    message.channel.send("Rolling Dice... You rolled a 5!");
  }else{
    message.channel.send("Invalid game. Use " + prefix + " (Game) to play a game!");
  }
});

bot.login(process.env.token);
