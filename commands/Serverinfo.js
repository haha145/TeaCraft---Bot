const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    console.log("De Serverinfo Command Werkt");

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Server Info")
        .setColor("#40a4c9")
        .setThumbnail(icon)
        .addField("Bot Naam", bot.user.username)
        .addField("Je Bent Gejoint Op", message.member.joinedAt)
        .addField("Totaal Member", message.guild.memberCount)
        .setFooter("© TeaCraft")
        .setTimestamp();        

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "Serverinfo"
}