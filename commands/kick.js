const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    console.log("De Kick Command Werkt");

    // !kick @ItzJeBoyBob redenen hier.

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    if (!kickUser) return message.channel.send("Gebruiker Is Niet Gevonden");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef Een Reden Op");

    if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze Gebruiker Kan Je Niet Kicken!");

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("#ee0000")
        .addField("Kicked Gebruiker", kickUser)
        .addField("Gekickd Door", message.author)
        .addField("Reden", reason)
        .setFooter("© TeaCraft")
        .setTimestamp();

    var kickChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!kickChannel) return message.guild.send("Kan Het Kanaal Niet Vinden");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick"
}