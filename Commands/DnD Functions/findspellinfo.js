const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getclassspelllist')
    .setDescription('Gets the wikidot page for a DnD class\' spell list')
    .addStringOption(option => 
        option.setName('class')
        .setDescription('Choose the class that you want the wiki page for')
        .setRequired(true)
        .addChoices(
            {name: 'Artificer', value: 'artificer'},
            {name: 'Bard', value: 'bard'},
            {name: 'Cleric', value: 'cleric'},
            {name: 'Druid', value: 'druid'},
            {name: 'Paladin', value: 'paladin'},
            {name: 'Ranger', value: 'ranger'},
            {name: 'Sorcerer', value: 'sorcerer'},
            {name: 'warlock', value: 'warlock'},
            {name: 'Wizard', value: 'wizard'}

        )),

        async execute(interaction)
        {
            var Class = interaction.options.getString('class')
            var url = "http://www.dnd5e.wikidot.com/spells:" + Class;
            await interaction.reply(url)
        },
}