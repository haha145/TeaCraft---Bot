const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    console.log("De Info Command Werkt");

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("Discord Bot Info")
        .setColor("#40a4c9")
        .setThumbnail(botIcon)
        .addField("Bot Naam", bot.user.username)
        .addField("Gemaakt op", bot.user.createdAt)
        .setFooter("© TeaCraft")
        .setTimestamp();

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "Info"
}