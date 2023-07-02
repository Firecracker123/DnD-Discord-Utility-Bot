const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getclassspelllist')
    .setDescription('Gets the wikidot page for a DnD class\' spell list')
    .addStringOption(option => 
        option.setName('class')
        .setDescription('Choose the class that you want the wiki page for')
        .setRequired(true)
        .setAutocomplete(true)
        .addChoices(



        )),

        async execute(interaction)
        {
            var Class = interaction.options.getString('class')
            var url = "http://www.dnd5e.wikidot.com/spells:" + Class;
            await interaction.reply(url)
        },
}