const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getfeatinfo')
    .setDescription('Gets the wikidot page of a feat')
    .addStringOption(option => 
        option.setName('featname')
        .setDescription('Choose the feat that you want the wiki page for')
        .setRequired(true)
        .setAutocomplete(true)
       ),
        async autocomplete(interaction)
        {
            console.log('Autocomplete activated')
           const focusedValue = interaction.options.getFocused().toLowerCase();
           //console.log(interaction.options.focusedValue());


           const choices = ["aberrant-dragonmark", "actor", "adept-of-the-black-robes", "adept-of-the-red-robes", "adept-of-the-white-robes", "alert", "artificer-initiate", 
           "athlete", "charger", "chef", "crossbow-expert", "crusher", "defensive-duelist", "divinely-favored", "dual-wielder", "dungeon-delver", 
           "durable", "eldritch-adept", "elemental-adept", "fey-touched", "fighting-initiate", "gift-of-the-chromatic-dragon", 
           "gift-of-the-gem-dragon", "gift-of-the-metallic-dragon", "grappler", "great-weapon-master", "gunner", "healer", "heavily-armored", "heavy-armor-master", 
           "initiate-of-high-sorcery", "inspiring-leader", "keen-mind", "knight-of-the-crown", "knight-of-the-sword", "knight-of-the-rose", "lightly-armored", "linguist", 
           "lucky", "mage-slayer", "magic-initiate", "martial-adept", "medium-armor-master", "metamagic-adept", "mobile", "moderately-armored", "mounted-combatant", "observant", 
           "piercer", "poisoner", "polearm-master", "resilient", "ritual-caster", "savage-attacker", "sentinel", "shadow-touched", "sharpshooter", "shield-master", "skill-expert", 
           "skilled", "skulker", "slasher", "spell-sniper", "squire-of-solamnia", "strixhaven-initiate", "strixhaven-mascot", "tavern-brawler", "telekinetic", "telepathic", "tough", 
           "war-caster", "weapon-master", "acrobat", "adept-of-the-black-robes-ua", "adept-of-the-red-robes-ua", "adept-of-the-white-robes-ua", "agent-of-order-ua", "alchemist", 
           "animal-handler", "arcanist", "baleful-scion-ua", "blade-mastery", "brawny", "burglar", "cartomancer-ua", "cohort-of-chaos-ua", "diplomat", "divine-communications-ua", 
           "divinely-favored-ua", "dragonmark-ua", "elemental-touched-ua", "ember-of-the-fire-giant-ua", "ember-of-the-fire-giant-revised-ua", "empathic", "fell-handed", 
           "flail-mastery", "fury-of-the-frost-giant-ua", "fury-of-the-frost-giant-revised-ua", "guile-of-the-cloud-giant-ua", "guile-of-the-cloud-giant-revised-ua", "gourmand", 
           "greater-dragonmark", "historian", "initiate-of-high-sorcery-ua", "investigator", "keenness-of-the-stone-giant-ua", "keenness-of-the-stone-giant-revised-ua", 
           "knight-of-the-crown-ua", "knight-of-the-sword-ua", "knight-of-the-rose-ua", "master-of-disguise", "medic", "menacing", "metabolic-control", "naturalist", "outlands-envoy-ua", 
           "outsized-might-ua", "perceptive", "performer", "planar-wanderer-ua", "practiced-expert", "quick-fingered", "righteous-heritor-ua", "rune-carver-adept-ua", 
           "rune-carver-adept-revised-ua", "rune-carver-apprentice-ua", "rune-carver-apprentice-revised-ua", "scion-of-elemental-air-ua", "scion-of-elemental-earth-ua", 
           "scion-of-elemental-fire-ua", "scion-of-elemental-water-ua", "shield-training", "silver-tongued", "spear-mastery", "squire-of-solamnia-ua", "soul-of-the-storm-giant-ua", 
           "soul-of-the-storm-giant-revised-ua", "stealthy", "strike-of-the-giants-ua", "survivalist", "tandem-tactician", "theologian", "tower-of-iron-will", "tracker", 
           "vigor-of-the-hill-giant-ua", "vigor-of-the-hill-giant-revised-ua", "wild-talent", "servo-crafting", "quicksmithing", "cruel", "flash-recall", "mystic-conflux", 
           "remarkable-recovery", "spelldriver", "thrown-arms-master", "vital-sacrifice", "bountiful-luck", "dragon-fear", "dragon-hide", "dwarven-resilience", "drow-high-magic", 
           "elven-accuracy", "fade-away", "fey-teleportation", "flames-of-phlegethos", "infernal-constitution", "orcish-fury", "prodigy", "revenant-blade", "second-chance", 
           "squat-nimbleness", "svirfneblin-magic", "wood-elf-magic", "barbed-hide", "critter-friend", "dragon-wings", "everybodys-friend", "grudge-bearer", "human-determination", 
           "orcish-aggression", "wonder-maker", "vampiric-exultation"]


           const filtered = choices.filter(choice => choice.startsWith(focusedValue)).slice(0, 25)
           await interaction.respond(
                filtered.map(choice => ({ name: choice, value: choice}))
           )
        },

        async execute(interaction)
        {
            var featname = interaction.options.getString('featname')
            var url = "http://www.dnd5e.wikidot.com/feat:" + featname;
            await interaction.reply({content: url, ephemeral: true})
        },
}