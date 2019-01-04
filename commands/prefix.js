const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    if (!args[0]) return message.reply("Gebruik: !prefix <Hier De Prefix>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (error) => {
        if (error) console.log(error);
    });

    var stringEmbed = new discord.RichEmbed()
        .setColor("#F00")
        .setTitle("Prefix")
        .setDescription(`Prefix Is Aangepast Naar ${args[0]}`);

    message.channel.send(stringEmbed);

}

module.exports.help = {
    name: "prefix"
}