const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Mita_ !help");
    console.log("The bot was been connected");
});

bot.login("NDk0NDM0MjI4OTQ0MjQwNjUw.Do0HKA.jyAEA2wpCV7wYiGTJ7__wee5y-k");
