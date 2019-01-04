const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    // !tempmute gebruiker 1h30m10s

    //if (message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kan je niet TempMute.");

    var muteRole = message.guild.roles.find("name", "Muted");

    if(!muteRole) return message.channel.send("De Role Bestaat Niet.");

    var muteTime = args[1];

    if(!muteTime) return message.channel.send("Geef Een Tijd Aan.");

    await (user.addRole(muteRole.id))

    message.channel.send(`${user} Is Gemute Voor ${muteTime}`);

    setTimeout(function () {

        user.removeRole(muteRole.id);

        message.channel.send(`${user} Is Unmuted`)

    }, ms(muteTime));

    var tempmuteEmbed = new discord.RichEmbed()
        .setDescription("TempMute")
        .setColor("#ee0000")
        .addField("Muted Gebruiker", user)
        .addField("Gemute Door", message.author)
        .addField("Voor Hoe Lang", `${muteTime}`)
        .setFooter("© TeaCraft")
        .setTimestamp();

    var tempmuteChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!tempmuteChannel) return message.guild.send("Kan Het Kanaal Niet Vinden");

    tempmuteChannel.send(tempmuteEmbed);

}

module.exports.help = {
    name: "tempmute"
}