const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('createCharacter')
    .setDescription('Gets the wikidot page for a DnD class')
    .addStringOption(option => 
        option.setName('class')
        .setDescription('Choose the class that you want the wiki page for')
        .setRequired(true)
        .setAutocomplete(true)
        ),

        async autocomplete(interaction)
        {
            const filtered = choices.filter(choice => choice.startsWith(focusedValue)).slice(0, 25)
           await interaction.respond(
                filtered.map(choice => ({ name: choice, value: choice}))
                )
                
        },

        async execute(interaction)
        {
            var Class = interaction.options.getString('class')
            var url = "http://www.dnd5e.wikidot.com/" + Class;
            await interaction.reply(url)
        },
}