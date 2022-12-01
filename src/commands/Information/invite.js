const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme"],
  description: "Get the bot's invite link.",
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
      .setAuthor({ name: 'DjAlpha', iconURL: 'https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png' })
      .setThumbnail('https://cdn.discordapp.com/attachments/892744756222906439/1046831093883613265/unknown.png')
      .setColor(0x303236)
      .addFields([{ name: 'invite DjAlpha', value: `[Here](https://discord.com/api/oauth2/authorize?client_id=817804746840604742&permissions=36768832&scope=applications.commands%20bot)` }])
    message.reply({ embeds: [mainPage], components: [row] })
  }
}
