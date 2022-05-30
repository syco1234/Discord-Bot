const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgwODY4NzM5MzA0MTU3MjQ0.GHVTtZ.pf6gk3tQCEIp1CCLc0ha3t2HqhdcyP8dpYjbow"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world!")
    }
})

client.login(process.env.TOKEN)