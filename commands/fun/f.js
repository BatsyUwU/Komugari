const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class FCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'f',
            aliases: ['respect', 'respects'],
            group: 'fun',
            memberName: 'f',
            description: 'Press F to pay respects',
            examples: ['f the user that just left :" ('],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }

    run (message) {
        const respect = message.content.split(/\s+/g).slice(1).join(" ");
        if(!respect) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username} has paid their respects.`, message.author.avatarURL())
                .setColor('#4E373B')
                .setFooter(`Press F to pay your respects.`)
            message.channel.send({embed}).then(m=>m.react("🇫"))
            return
            
            } else {
                const respect = message.content.split(/\s+/g).slice(1).join(" ");
                const embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username} has paid their respects to ${respect}.`, message.author.avatarURL())
                    .setColor('#4E373B')
                    .setFooter(`Press F to pay your respects.`)
                message.channel.send({embed}).then(m=>m.react("🇫"))
                return
            }
	}
}