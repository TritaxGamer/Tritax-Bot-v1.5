const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
 
  let balance = await db.fetch(`userBalance_${message.author.id}`)
  
  	let embed = new Discord.RichEmbed()
  	.setTitle(`${message.guild.name} Bank`)
  	.addField('Account Holder', message.member.displayName, true)
  	.addField('Account Balance', `${balance === null ? "0" : balance}`, true)
  	.setColor('#a5ff1e')
    message.channel.send(embed)
  }

module.exports.help = {
  name: 'balance'
}
