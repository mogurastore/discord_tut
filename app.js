const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (msg) => {
  if (msg.content === "hello") {
    msg.reply("hello!");
  }
});

client.login(process.env.TOKEN);
