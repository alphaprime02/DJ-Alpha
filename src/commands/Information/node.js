const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "node",
    category: "Information",
    description: "Displays node information.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        const all = client.manager.nodes.map(node =>
            `\nPlayer: ${node.stats.players}` +
            `\nPlaying Players: ${node.stats.playingPlayers}` +
            `\nUptime: ${new Date(node.stats.uptime).toISOString().slice(11, 19)}` +
            "\n\nCPU" +
            `\nSystem Load: ${(Math.round(node.stats.cpu.systemLoad * 100) / 100).toFixed(2)}%` +
            `\nLavalink Load: ${(Math.round(node.stats.cpu.lavalinkLoad * 100) / 100).toFixed(2)}%`
        ).join('\n\n----------------------------\n');

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Lavalink Node', iconURL: client.user.displayAvatarURL() })
            .setDescription(`\`\`\`${all}\`\`\``)
            .setColor(client.embedColor)
        message.reply({ embeds: [embed] })
    }
}
