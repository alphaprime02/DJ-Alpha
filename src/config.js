module.exports = {
    token: process.env.TOKEN || "ODA0MjM0MjU4MDc5Njc4NDY2.G8O0NL.D7_DPzwOseCykjNLhLg3hM2cGG2i-aNj4Olxzs",  // your bot token
    clientID: process.env.CLIENT_ID || "804234258079678466", // your bot client id
    prefix: process.env.PREFIX || ".", // bot prefix
    ownerID: process.env.OWNER_ID || "594770423015800842", //your discord id
    SpotifyID: process.env.SPOTIFY_ID || "81fca459bf684d58b71c9dce43727059",
    SpotifySecret: process.env.SPOTIFY_SECRET || "42f7bf9bda5945e4b1f0b32b144fd0e0",
    mongourl: process.env.MONGO_URL || "mongodb+srv://alpha_prime02:jdpF676N34qCQ_U@cluster0.7wi6swu.mongodb.net/jdalpha", // MongoDb URL
    embedColor: process.env.EMBED_COLOR || 0x303236, // embed colour
    logs: process.env.LOGS || "1047386809769934908", // channel id for guild create and delete logs
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1047386713233821716", //error logs channel id
    SearchPlatform: process.env.SEARCH_PLATFORM || "youtube music", // Sets the Search Platform. Possibilities: youtube || youtube music || soundcloud
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube music,youtube,soundcloud", // Sets the order of Slash command's AutoComplete results
    links: {
        img: process.env.IMG || 'https://media.discordapp.net/attachments/963097935820750878/983300268131225651/20220606_145403.png', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/ns8CTk9J3e', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=977742811132743762&permissions=8&scope=bot%20applications.commands' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava4.horizxon.studio",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "horizxon.studio",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}