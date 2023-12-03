//Token du bot : MTE4MDY3OTEwNzIxMDY2MTk4MA.Gu0M9u.ps8sCQKQikaNbh6Zi3yc_6AHETTHkl3oA5iW_c
const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const config = require("./config")

bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)

bot.on("messageCreate", async message => {

    if(message.content === "!ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("ready", async () => {

    console.log(`${bot.user.tag} est bien ligne ligne !`)
})