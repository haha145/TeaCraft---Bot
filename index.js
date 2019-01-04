const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

const bot = new discord.Client();
bot.commands = new discord.Collection();

const prefix = setting.prefix;
const token = process.env.TOKEN;

fs.readdir("./commands/", (error, files) => {

    if (error) console.log(error);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kon geen files vinden :-(");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De File ${f} Is Geladen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} Is Online :-)`)

    bot.user.setActivity("Ip BinnenKort", { type: "PLAYING" });

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Speler")

    if (!role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "welkom");

    if (!channel) return

    //channel.send(`JuulNetwork
   //Welkom ${member} bij de officiele JuulNetwork Discord! 

   //Voordat je begint lees eerst even onze regels door want wij willen het een gezelige
   //community houden!
    
   //Voor al je vragen of tips! kan je altijd een ticket aanmaken met -new 
   //Je kan onze server joinen met: ...`);

});

bot.on("message", async message => {

    // Als bot bericht stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botConfig.prefix
        };
    }

    var prefix = prefixes[message.guild.id].prefixes;

    // var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0]

    var arguments = messageArray.slice(1);

    console.log(prefix);

    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);

    if (command === `${prefix}Bot`) {

        return message.channel.send("Ben Wakker :-)");

        var Bot = new discord.RichEmbed()
            .setFooter("ElectronicMC")
            .setTimeout();

    }

    if (command === `${prefix}say`) {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);

    }

    if (command === 'avatar') {
        let user = message.mentions.user.first() || message.author;


        let embed = new discord.RichEmbed()
            .setAuthor(`${user.username}`)
            .setImage(user.displayAvatarURL)
            .setColor("#ee0000");

        message.channel.send(embed);
    }
});

bot.on('error', err => {
    console.log(err);
});


bot.login(botConfig.token);