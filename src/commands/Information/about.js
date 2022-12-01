const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: ["botinfo", "info"],
    description: "See information about this project.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
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
            .setAuthor({ name: 'DjAlpha', iconURL: 'https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png'})
            .setThumbnail('https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png')
            .setColor(client.embedColor)
            .addFields([
                { name: 'Creator', value: 'alpha_prime and jarvis', inline: true },
                { name: 'Organization', value: 'AnimeSoul-(India)', inline: true },
            ]);
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
