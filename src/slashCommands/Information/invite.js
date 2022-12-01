const { EmbedBuilder, CommandInteraction, ButtonStyle, Client, ButtonBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get the bot's invite link.",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=817804746840604742&permissions=36768832&scope=applications.commands%20bot`),
    new ButtonBuilder()
    .setLabel("Support")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/hAvcvuQ6am")
			);

    const mainPage = new EmbedBuilder()
    .setAuthor({ name: 'DjAlpha', iconURL: 'https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png' })
    .setThumbnail('https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png')
    .setColor(0x303236)
    .addFields([{ name: 'invite DjAlpha', value: `[Here](https://discord.com/api/oauth2/authorize?client_id=817804746840604742&permissions=36768832&scope=applications.commands%20bot)` }])
     await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}
