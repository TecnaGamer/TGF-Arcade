const { Client, IntentsBitField } = require('discord.js');

const tgfArcade = Client({
    intents: [
        IntentsBitField.Flags.Guilds,
    ]
})