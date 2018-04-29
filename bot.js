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
    if (cmd.split("roll dice")[1] >= 1 && cmd.split("roll dice")[1] <= 6){
      const ayy = client.emojis.find("name", "ayy");
      var randomnumber = Math.floor((Math.random() * 6) + 1);
      message.channel.send(ayy + "Rolling Dice... You rolled a " + randomnumber + "!");
    }else{
      message.channel.send("Must select a number 1 - 6.");
    }
  }else{
    message.channel.send("Invalid game. Use " + prefix + " (Game) to play a game!");
  }
});

bot.login(process.env.token);
