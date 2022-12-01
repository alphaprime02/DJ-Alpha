const { EmbedBuilder, CommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandType } = require("discord.js")

module.exports = {
    name: "about",
    description: "See information about this project.",
    type: ApplicationCommandType.ChatInput,
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
        
        const button = new ButtonBuilder()
            .setLabel("Invite")
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=817804746840604742&permissions=36768832&scope=applications.commands%20bot`)

        const button2 = new ButtonBuilder()
            .setLabel("Support ")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/hAvcvuQ6am")

        const row = new ActionRowBuilder().addComponents(button, button2);

        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'DjAlpha', iconURL: 'https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png'})
            .setThumbnail('https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png')
            .setColor(client.embedColor)
            .addFields([
            { name: 'Creator', value: 'alpha_prime and jarvis', inline: true },
            { name: 'Organization', value: 'AnimeSoul-(India)', inline: true },
            ]);
        await interaction.followUp({ embeds: [mainPage], components: [row] });
    }
}
