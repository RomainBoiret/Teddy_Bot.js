require('dotenv').config(); // This loads the variables from .env into process.env

const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const token = process.env.TOKEN;

bot.commands = new Discord.Collection()

bot.login(token)
loadCommands(bot)
loadEvents(bot)
