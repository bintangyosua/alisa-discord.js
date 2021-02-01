const emoji = require('../../utils/emojis.json');
const eco = require("discord-economy");

module.exports = {
  name: 'dice',
  description: 'dice for money',
  aliases: ['rolldice'],
  usage: '\`dice <roll_number> <amount>\`',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    var roll = args[0] //Should be a number between 1 and 6
    var amount = args[1] //Coins to gamble
 
    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('Specify the roll, it should be a number between 1-6')
    if (!amount) return message.reply('Specify the amount you want to gamble!')
 
    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')
 
    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
    message.reply(`The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`)

  }
}