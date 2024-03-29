const { canModifyQueue } = require("../../utils/EvobotUtil");

module.exports = {
  name: "loop",
  description: "Toggle music loop",
  category: "🎶   Music :",
  aliases: ['loops'],
  usage: "loop",
  run: async (client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`Loop is now ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
  }
};
