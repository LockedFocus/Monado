const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "\\"
let welcome = true;


bot.on('ready', () => {
   console.log('Monado: Ready!');
});

bot.on("guildMemberAdd", member => {
  if (welcome) {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome to the chat, ${member.user}!`);
  }
});

bot.on('message', message => {
   if (message.author.bot) return;
   if (!message.content.startsWith(prefix)) return;

   let command = message.content.split(" ")[0];
   command = command.slice(prefix.length)

   let args = message.content.split(" ").slice(1);

   if (command === "ping") {
      return;
   } else if (command == "say") {
      message.channel.sendMessage(args.join(" "));
   } else if (command == "add") {
      let numArray = args.map(n=> parseFloat(n));
      let sum = numArray.reduce((p, c) => p+c);
      if (isNaN(sum)) {
         message.channel.sendMessage("Invalid syntax: All products must be a rational number")
      } else {
         message.channel.sendMessage(sum)
      }
   } else if (command == "ks") {
        message.channel.sendMessage(`Rule #4: Do not kinkshame the sword!`)
   } else if (command == "commands") {
         message.channel.sendMessage("Here's a list of commands:");
   } else {
      message.channel.sendMessage("Invalid command: Type '" + prefix + "commands' to see a list of commands!")
   }
});

bot.login("MjQ3NDY5OTg4OTEzNDc5Njkw.Cwpp5w.hnMuz8EiDF3vGwrovH63XKx59P0")
