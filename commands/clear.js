const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !clear 21

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry Jij Hebt Geen Toegang Tot Dit Commando");

    if (!args[0]) return message.reply("Geef aantal berichten op!")

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => { 

            message.channel.send(`Ik Heb ${args[0]} Berichten Verwijderd.`).then(msg => msg.delete(3000));

        });

    } else {
        return message.channel.send("Geef een getal op");
    }


}

module.exports.help = {
    name: "clear"
}