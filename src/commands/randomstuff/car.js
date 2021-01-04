const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'car',
    description: 'Get Random Car Image',
    category: '🎲   **Random Stuff :**',
    usage: "car",
    aliases: "cars",
    run: async (client, message, args) => {
        const url = 'https://no-api-key.com/api/v1/car';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor(`3caea3`)
            .setImage(data.image)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)

        await message.channel.send(embed)
    }
}