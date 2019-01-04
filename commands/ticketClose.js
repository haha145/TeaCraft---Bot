const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // Id of the tickets category.
    const categoryId = "528021623874519060";

    // If message is in a ticket channel
    if (message.channel.parentID == categoryId) {

        message.channel.delete();

    } else { // If not

        message.channel.send("Gelieve dit commando in een ticket kanaal uit te voeren.");

    }

    // Create embed.
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Hoi " + message.author.username)
        .setColor("#40a4c9")
        .setDescription("Je ticket is gemarkeerd als **compleet**. Wil je een nieuwe maken doe dan >ticket")
        .setFooter("Ticket gesloten");

    // Find channel for the log.
    var ticketChannel = message.guild.channels.find(`name`, "bot-logs");
    if (!ticketChannel) return message.guild.send("Kan het kanaal niet vinden");

    // Send embed.
    ticketChannel.send(embedCreateTicket);

}

module.exports.help = {
    name: "close"
}