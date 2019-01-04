const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker ItzJeBoyBob  

    // if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.reply("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    //if (!user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry Deze Persoon Kan Je Niet Warnen.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef Een Reden Op");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#ee0000")
        .addField("Warned Gebruiker", user)
        .addField("Gewarned Door", message.author)
        .addField("Aantal Warns", warns[user.id].warns)
        .addField("Reden", reason)
        .setFooter("© TeaCraft")
        .setTimestamp();

    var warnChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!warnChannel) return message.guild.send("Kan Het Kanaal Niet Vinden");

    warnChannel.send(warnEmbed);

}

module.exports.help = {
    name: "warn"
}