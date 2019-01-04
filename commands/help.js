const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

try{

        var text = "**TeaCraft Bot** \n\n **__Commands__** \n !profiel - Om Iemand De Profiel Foto/Logo Te Zien \n !Serverinfo - Vraag ServerInformatie \n !Info - Bot informatie En Je Eigen info \n\n **__Dit Zij StaffCommands__** \n !kick - Om Iemand Te Kicken \n !ban - Om Iemand Te Bannen \n !clear - Om Berichten Te Verwijderen \n !prefix - Om Bot Pefix Te Veranderen \n !tempmute - Om Iemand Te Muten Voor Een Paar Min/Sec/Uur \n !warn - Om Iemand Te Waarschuwen \n\n © TeaCraft";

        message.author.send(text);

        message.channel.send("Alle Commands Zijn Prive Opgestuurd.");

    } catch (error){
        message.channel.send("Er Is Iets Mis Gegaan");
    }

}

module.exports.help = {
    name: "help"
}