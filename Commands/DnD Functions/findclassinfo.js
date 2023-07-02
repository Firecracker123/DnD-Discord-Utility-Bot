const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getclassinfo')
    .setDescription('Gets the wikidot page for a DnD class')
    .addStringOption(option => 
        option.setName('class')
        .setDescription('Choose the class that you want the wiki page for')
        .setRequired(true)
        .addChoices(
            {name: 'Artificer', value: 'artificer'},
            {name: 'Barbarian', value: 'barbarian'},
            {name: 'Bard', value: 'bard'},
            {name: 'Blood Hunter', value: 'blood-hunter'},
            {name: 'Cleric', value: 'cleric'},
            {name: 'Druid', value: 'druid'},
            {name: 'Fighter', value: 'fighter'},
            {name: 'Monk', value: 'monk'},
            {name: 'Paladin', value: 'paladin'},
            {name: 'Ranger', value: 'ranger'},
            {name: 'Rogue', value: 'rogue'},
            {name: 'Sorcerer', value: 'sorcerer'},
            {name: 'Warlock', value: 'warlock'},
            {name: 'Wizard', value: 'wizard'}

        )),

        async execute(interaction)
        {
            var Class = interaction.options.getString('class')
            var url = "http://www.dnd5e.wikidot.com/" + Class;
            await interaction.reply(url)
        },
}