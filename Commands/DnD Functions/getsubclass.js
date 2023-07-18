const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getsubclass')
    .setDescription('Gets the wikidot page for a subclass of a dnd class')
    .addStringOption(option => 
        option.setName('class')
        .setDescription('Choose the class of the subclass that you want to get')
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

        ))
        .addStringOption(option =>
            option.setName('subclass')
            .setDescription('Choose enter subclass name')
            .setRequired(true)
            .setAutocomplete(true)
            ),

        async autocomplete(interaction)
        {
            const focusedValue = interaction.options.getFocused().toLowerCase()
            const className = interaction.options.getString('class')
            console.log('subclass autocomplete')

            var subclassArray = []

                subclassArray['artificer'] = ["alchemist", "armorer", "artillerist", "battle-smith", "forge-adept", "mastermaker", "maverick", "archivist-ua", "armorer-ua"]
                subclassArray['barbarian'] = ["ancestral-guardian", "battlerager", "beast", "berserker", "storm-herald", "totem-warrior", "wild-magic", "zealot", "giant-ua", "juggernaut", "juggernaut-reborn", "path-of-the-depths-pc", "beast-ua", "wild-soul-ua"]
                subclassArray['bard'] = ["creation", "eloquence", "glamour", "lore", "spirits", "swords", "valor", "whispers", "dirge-singer", "maestro", "tragedy", "creation-ua", "satire-ua", "spirits-ua"]
                subclassArray['blood-hunter'] = ["ghostslayer", "lycan", "mutant", "profane-soul"]
                subclassArray['cleric'] = ["arcana", "death", "forge", "grave", "knowledge", "life", "light", "nature", "order", "peace", "tempest", "trickery", "twilight", "war", "ambition", "solidarity", "strength", "zeal", "fate-ua", "beauty-hb", "blood", "blood-reborn", "mind", "moon", "city-ua", "protection-ua", "twilight-ua", "unity-ua"]
                subclassArray['druid'] = ["dreams", "land", "moon", "shepherd", "spores", "stars", "wildfire", "primeval-ua", "blighted", "forged-hb", "stars-ua", "twilight-ua", "wildlife-ua"]
                subclassArray['fighter'] = ["arcane-archer", "banneret", "battle-master", "cavalier", "champion", "echo-knight", "eldritch-knight", "psi-warrior", "rune-knight", "samurai", "gunslinger", "renegade", "arcane-archer-ua", "arcane-archer-revised-ua", "brute-ua", "cavalier-ua", "knight-ua", "monster-hunter-ua", "psi-knight-ua", "psychic-warrior-ua", "rune-knight-ua", "samurai-ua", "scout-ua", "sharpshooter-ua"]
                subclassArray['monk'] = ["mercy", "ascendant-dragon", "astral-self", "drunken-master", "four-elements", "kensei", "long-death", "open-hand", "shadow", "sun-soul", "cobalt-soul", "living-weapon", "soul-knife", "ascendant-dragon-ua", "astral-self-ua", "mercy-ua", "tranquility-ua"]
                subclassArray['paladin'] = ["ancients", "conquest", "crown", "devotion", "glory", "redemption", "vengeance", "watchers", "oathbreaker", "open-sea", "heroism-ua", "treachery-ua", "redemption-ua", "watchers-ua"] 
                subclassArray['ranger'] = ["beast-master", "drakewarden", "fey-wanderer", "gloom-stalker", "horizon-walker", "hunter", "monster-slayer", "swarmkeeper", "deep-stalker-ua", "drakewarden-ua", "fey-wanderer-ua", "primeval-guardian-ua", "swarmkeeper-ua"]
                subclassArray['rogue'] = ["arcane-trickster", "assassin", "inquisitive", "mastermind", "phantom", "scout", "soulknife", "swashbuckler", "thief", "wild-card", "phantom-ua", "revived-ua", "soulknife-ua", "soulknife-revisited-ua"]
                subclassArray['sorcerer'] = ["aberrant-mind", "clockwork-soul", "draconic-bloodline", "divine-soul", "lunar-sorcery", "shadow-magic", "storm-sorcery", "wild-magic", "pyromancy", "runechild", "runechild-reborn", "aberrant-mind-ua", "clockwork-soul-ua", "favored-soul-ua", "favored-soul-revisited-ua", "giant-soul-ua", "lunar-magic-ua", "phoenix-sorcery-ua", "psionic-soul-ua", "sea-sorcery-ua", "shadow-ua", "stone-sorcery-ua", ]
                subclassArray['warlock'] = ["archfey", "celestial", "fathomless", "fiend", "the-genie", "great-old-one", "hexblade", "undead", "undying", "kraken", "celestial-ua", "genie-ua", "ghost-in-the-machine-ua", "hexblade-ua", "lurker-in-the-deep-ua", "noble-genie-ua", "raven-queen-ua", "seeker-ua", "undead-ua", "undying-light-ua"]
                subclassArray['wizard'] = ["abjuration", "bladesinging", "chronurgy", "conjuration", "divination", "enchantment", "evocation", "graviturgy", "illusion", "necromancy", "order-of-scribes", "transmutation", "war-magic", "blood-magic", "artificer-ua", "invention-ua", "lore-mastery-ua", "onomancy-ua", "order-of-scribes-ua", "psionics-ua", "technomancy-ua", "theurgy-ua"]

                choices = subclassArray[className]

                const filtered = choices.filter(choice => choice.startsWith(focusedValue)).slice(0, 25)
                await interaction.respond(
                filtered.map(choice => ({ name: choice, value: choice}))
           )
        },      

        async execute(interaction)
        {
            var Class = interaction.options.getString('class')
            var Subclass = interaction.options.getString('subclass')
            var url = "http://www.dnd5e.wikidot.com/" + Class + ":" + Subclass;
            await interaction.reply(url)
        },
}