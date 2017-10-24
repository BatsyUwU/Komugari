const { Command } = require('../../commando');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const actions = require('../../assets/json/actions.json');

module.exports = class StareCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stare',
            aliases: ['glare'],
            group: 'action',
            memberName: 'stare',
            guildOnly: true,
            description: 'Stares at the user you mentioned!',
            examples: ['~stare <user>'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    async run (message) {
        var recipient = message.content.split(/\s+/g).slice(1).join(" ");        
        if(!recipient) {
            var embed = new Discord.MessageEmbed()
                .setColor('#FBCFCF')
                .setImage(actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]);
            return message.channel.send(`${message.author} stares at... themselves..?`, {embed: embed});
    
        } else if(message.mentions.users.first() == message.author) {
            var embed = new Discord.MessageEmbed()
                .setColor('#FBCFCF')
                .setImage(actions.disgustP[Math.round(Math.random() * (actions.disgustP.length - 1))]);
            return message.channel.send(`${message.author} stares at... themselves..?`, {embed: embed});
            
        } else {
    
            var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=stare`);
            var body = JSON.parse(text.text);
    
            var recipient = message.content.split(/\s+/g).slice(1).join(" ");
            var embed = new Discord.MessageEmbed()
                .setColor('#FBCFCF')
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(`${message.author} stares at ${recipient}...`, {embed:embed});    
    
        }
    }
}