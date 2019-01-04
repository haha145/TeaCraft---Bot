const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    console.log("De Ban Command Werkt");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    if (!banUser) return message.channel.send("Gebruiker Is Niet Gevonden");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef Een Reden Op");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze Gebruiker Kan Je Niet bannen!");

    var ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ee0000")
        .addField("baned Gebruiker", banUser)
        .addField("Geband Door", message.author)
        .addField("Reden", reason)
        .setFooter("© TeaCraft")
        .setTimestamp();

    var banChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!banChannel) return message.guild.send("Kan Het Kanaal Niet Vinden");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);


    return;

}

module.exports.help = {
    name: "ban"
}