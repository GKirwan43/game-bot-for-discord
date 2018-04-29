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
  var cmd= message.content.split(prefix)[1].substring(1, message.content.split(prefix)[1].length)
  console.log(cmd)

  if (cmd.includes("roll dice")){
    if (cmd.split("roll dice ")[1] >= 1 && cmd.split("roll dice ")[1] <= 6){
      var randomnumber = Math.floor((Math.random() * 6) + 1);
      console.log(randomnumber)
      console.log(cmd.split("roll dice ")[1])
      if (randomnumber == cmd.split("roll dice ")[1]){
        message.channel.send("Rolling Dice... " + message.author + " rolled a " + randomnumber + "! You won 10 credits!");
      }else{
        message.channel.send("Rolling Dice... " + message.author + " rolled a " + randomnumber + "! You lost 10 credits!");
      }
    }else{
      message.channel.send("Must select a number 1 - 6.");
    }
  }else if (cmd.includes("giveaway")){
    if (cmd.split("giveaway")[1] >= 100){
      var randomnumber = Math.floor((Math.random() * 6) + 1);
      message.channel.send("Rolling Dice... You rolled a " + randomnumber + "!");
    }else{
      message.channel.send("Giveaway size must be 100 credits or larger!");
    }
  }else{
    message.channel.send("Invalid game. Use " + prefix + " (Game) to play a game!");
  }
});

bot.login(process.env.token);
