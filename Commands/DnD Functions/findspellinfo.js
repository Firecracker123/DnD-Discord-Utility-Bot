const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getspellinfo')
    .setDescription('Gets the wikidot page for a DnD class\' spell list')
    .addStringOption(option => 
        option.setName('spellname')
        .setDescription('Choose the spell that you want the wiki page for')
        .setRequired(true)
        .setAutocomplete(true)
       ),
        async autocomplete(interaction)
        {
            console.log('Autocomplete activated')
           const focusedValue = interaction.options.getFocused().toLowerCase();
           //console.log(interaction.options.focusedValue());


           const choices = ["acid-splash", "blade-ward", "booming-blade", 
           "chill-touch", "control-flames", "create-bonfire", "dancing-lights", 
           "decompose", "druidcraft", "eldritch-blast", "encode-thoughts", 
           "fire-bolt", "friends", "frostbite", "green-flame-blade", "guidance", 
           "gust", "hand-of-radiance", "infestation", "light", "lightning-lure", "mage-hand", 
           "magic-stone", "mending", "message", "mind-sliver", "minor-illusion", "mold-earth", 
           "on-off", "poison-spray", "prestidigitation", "primal-savagery", "produce-flame", 
           "ray-of-frost", "resistance", "sacred-flame", "sapping-sting", "shape-water", 
           "shillelagh", "shocking-grasp", "spare-the-dying", "sword-burst", "thaumaturgy", 
           "thorn-whip", "thunderclap", "toll-the-dead", "true-strike", "vicious-mockery", 
           "virtue", "word-of-radiance", "absorb-elements", "acid-stream", "alarm", 
           "animal-friendship", "arcane-weapon", "armor-of-agathys", "arms-of-hadar", "bane", 
           "beast-bond", "bless", "burning-hands", "catapult", "cause-fear", "ceremony", "chaos-bolt", 
           "charm-person", "chromatic-orb", "color-spray", "command", "compelled-duel", "comprehend-languages", 
           "create-or-destroy-water", "cure-wounds", "detect-evil-and-good", "detect-magic", "detect-poison-and-disease", 
           "disguise-self", "dissonant-whispers", "distort-value", "divine-favor", "earth-tremor", "ensnaring-strike", 
           "entangle", "expeditious-retreat", "faerie-fire", "false-life", "feather-fall", "find-familiar", "fog-cloud", 
           "frost-fingers", "gift-of-alacrity", "goodberry", "grease", "guiding-bolt", "guiding-hand-ua", "hail-of-thorns", 
           "healing-elixir-ua", "healing-word", "hellish-rebuke", "heroism", "hex", "hunters-mark", "ice-knife", "id-insinuation", 
           "identify", "illusory-script", "infallible-relay", "inflict-wounds", "jims-magic-missile", "jump", "longstrider", "mage-armor", 
           "magic-missile", "magnify-gravity", "protection-from-evil-and-good", "puppet", "purify-food-and-drink", "ray-of-sickness", 
           "remote-access", "sanctuary", "searing-smite", "sense-emotion", "shield", "shield-of-faith", "silent-image", "silvery-barbs", 
           "sleep", "snare", "speak-with-animals", "sudden-awakening", "tashas-caustic-brew", "tashas-hideous-laughter", "tensers-floating-disk", 
           "thunderous-smite", "thunderwave", "unearthly-chorus", "unseen-servant", "wild-cunning", "witch-bolt", "wrathful-smite", 
           "zephyr-strike", "aganazzars-scorcher", "aid", "air-bubble", "alter-self", "animal-messenger", "arcane-hacking", 
           "arcane-lock", "augury", "barkskin", "beast-sense", "blindness-deafness", "blur", "borrowed-knowledge", 
           "branding-smite", "calm-emotions", "cloud-of-daggers", "continual-flame", "cordon-of-arrows", "crown-of-madness", 
           "darkness", "darkvision", "detect-thoughts", "digital-phantom", "dragons-breath", "dust-devil", "earthbind", 
           "enhance-ability", "enlarge-reduce", "enthrall", "find-steed", "find-traps", "find-vehicle", "flame-blade", 
           "flaming-sphere", "flock-of-familiars", "fortunes-favor", "gentle-repose", "gift-of-gab", "gust-of-wind", 
           "healing-spirit", "heat-metal", "hold-person", "icingdeath-s-frost", "immovable-object", "invisibility", 
           "jims-glowing-coin", "kinetic-jaunt", "knock", "lesser-restoration", "levitate", "locate-animals-or-plants", 
           "locate-object", "magic-mouth", "magic-weapon", "maximillians-earthen-grasp", "melfs-acid-arrow", "mental-barrier", 
           "mind-spike", "mind-thrust", "mirror-image", "misty-step", "moonbeam", "nathairs-mischief", "nathairs-mischief-ua", 
           "nystuls-magic-aura", "pass-without-trace", "phantasmal-force", "prayer-of-healing", "protection-from-poison", "pyrotechnics", 
           "ray-of-enfeeblement", "rimes-binding-ice", "rope-trick", "scorching-ray", "see-invisibility", "shadow-blade", "shatter", "silence", 
           "skywrite", "snillocs-snowball-storm", "spider-climb", "spike-growth", "spiritual-weapon", "spray-of-cards", "suggestion", "summon-beast",
           "tashas-mind-whip", "thought-shield", "vortex-warp", "warding-bond", "warding-wind", "web", "wither-and-bloom", "wristpocket", "zone-of-truth", 
           "animate-dead", "antagonize-ua", "ashardalons-stride", "aura-of-vitality", "beacon-of-hope", "bestow-curse", "blinding-smite", "blink", "call-lightning", 
           "catnap", "clairvoyance", "conjure-animals", "conjure-barrage", "conjure-lesser-demon", "counterspell", "create-food-and-water", "crusaders-mantle", 
           "daylight", "dispel-magic", "elemental-weapon", "enemies-abound", "erupting-earth", "fast-friends", "fear", "feign-death", "fireball", "flame-arrows", 
           "flame-stride", "fly", "freedom-of-the-waves", "galders-tower", "gaseous-form", "glyph-of-warding", "haste", "haywire", "house-of-cards-ua", "hunger-of-hadar", 
           "hypnotic-pattern", "incite-greed", "intellect-fortress", "invisibility-to-cameras", "leomunds-tiny-hut", "life-transference", "lightning-arrow", 
           "lightning-bolt", "magic-circle", "major-image", "mass-healing-word", "meld-into-stone", "melfs-minute-meteors", "motivational-speech", "nondetection", 
           "phantom-steed", "plant-growth", "protection-from-ballistics", "protection-from-energy", "psionic-blast", "pulse-wave", "remove-curse", "revivify", 
           "sending", "sleet-storm", "slow", "speak-with-dead", "speak-with-plants", "spirit-guardians", "spirit-shroud", "stinking-cloud", "summon-fey", 
           "summon-lesser-demons", "summon-shadowspawn", "summon-undead", "summon-warrior-spirit", "thunder-step", "tidal-wave", "tiny-servant", "tongues", 
           "vampiric-touch", "wall-of-sand", "wall-of-water", "water-breathing", "water-walk", "wind-wall", "arcane-eye", "aura-of-life", "aura-of-purity", 
           "banishment", "blight", "charm-monster", "compulsion", "confusion", "conjure-barlgura", "conjure-knowbot", "conjure-minor-elementals", 
           "conjure-shadow-demon", "conjure-woodland-beings", "control-water", "death-ward", "dimension-door", "divination", "dominate-beast", "ego-whip", 
           "elemental-bane", "evards-black-tentacles", "fabricate", "find-greater-steed", "fire-shield", "freedom-of-movement", "galders-speedy-courier", 
           "giant-insect", "grasping-vine", "gravity-sinkhole", "greater-invisibility", "guardian-of-faith", "guardian-of-nature", "hallucinatory-terrain", 
           "ice-storm", "leomunds-secret-chest", "locate-creature", "mordenkainens-faithful-hound", "mordenkainens-private-sanctum", "otilukes-resilient-sphere", 
           "phantasmal-killer", "polymorph", "raulothims-psychic-lance", "raulothims-psychic-lance-ua", "shadow-of-moil", "sickening-radiance", "spirit-of-death", 
           "staggering-smite", "stone-shape", "stoneskin", "storm-sphere", "summon-aberration", "summon-construct", "summon-elemental", "summon-greater-demon", 
           "synchronicity", "system-backdoor", "vitriolic-sphere", "wall-of-fire", "watery-sphere", "widogast-s-vault-of-amber-hb", "widogast-s-web-of-fire-hb", 
           "animate-objects", "antilife-shell", "awaken", "banishing-smite", "bigbys-hand", "circle-of-power", "cloudkill", "commune", "commune-with-city", 
           "commune-with-nature", "cone-of-cold", "conjure-elemental", "conjure-volley", "conjure-vrock", "contact-other-plane", "contagion", "control-winds", 
           "create-spelljamming-helm", "creation", "danse-macabre", "dawn", "destructive-wave", "dispel-evil-and-good", "dominate-person", "dream", "enervation", 
           "far-step", "flame-strike", "freedom-of-the-winds", "geas", "greater-restoration", "hallow", "hold-monster", "holy-weapon", "immolation", "infernal-calling",
            "insect-plague", "legend-lore", "maelstrom", "mass-cure-wounds", "mislead", "modify-memory", "negative-energy-flood", "passwall", "planar-binding", 
            "raise-dead", "rarys-telepathic-bond", "reincarnate", "scrying", "seeming", "shutdown", "skill-empowerment", "steel-wind-strike", "summon-celestial", 
            "summon-draconic-spirit", "summon-draconic-spirit-ua", "swift-quiver", "synaptic-static", "telekinesis", "teleportation-circle", "temporal-shunt", 
            "transmute-rock", "tree-stride", "wall-of-force", "wall-of-light", "wall-of-stone", "wrath-of-nature", "arcane-gate", "blade-barrier", "bones-of-the-earth", 
            "chain-lightning", "circle-of-death", "conjure-fey", "contingency", "create-homunculus", "create-undead", "disintegrate", "drawmijs-instant-summons", 
            "druid-grove", "eyebite", "find-the-path", "fizbans-platinum-shield", "fizban-s-platinum-shield-ua", "flesh-to-stone", "forbiddance", 
            "globe-of-invulnerability", "gravity-fissure", "guards-and-wards", "harm", "heal", "heroes-feast", "investiture-of-flame", "investiture-of-ice", 
            "investiture-of-stone", "investiture-of-wind", "magic-jar", "mass-suggestion", "mental-prison", "move-earth", "otherworldly-form", 
            "otilukes-freezing-sphere", "ottos-irresistible-dance", "planar-ally", "primordial-ward", "programmed-illusion", "psychic-crush", 
            "scatter", "soul-cage", "summon-fiend", "sunbeam", "tashas-otherworldly-guise", "tensers-transformation", "transport-via-plants", 
            "true-seeing", "wall-of-ice", "wall-of-thorns", "widogast-s-transmogrification-hb", "wind-walk", "word-of-recall", "conjure-celestial", 
            "conjure-hezrou", "create-magen", "crown-of-stars", "delayed-blast-fireball", "divine-word", "draconic-transformation", "draconic-transformation-ua", 
            "dream-of-the-blue-veil", "etherealness", "finger-of-death", "fire-storm", "forcecage", "mirage-arcane", "mordenkainens-magnificent-mansion", 
            "mordenkainens-sword", "plane-shift", "power-word-pain", "prismatic-spray", "project-image", "regenerate", "resurrection", "reverse-gravity", 
            "sequester", "simulacrum", "symbol", "teleport", "temple-of-the-gods", "tether-essence", "whirlwind", "abi-dalzims-horrid-wilting", "animal-shapes", 
            "antimagic-field", "antipathy-sympathy", "clone", "control-weather", "dark-star", "demiplane", "dominate-monster", "earthquake", "feeblemind", 
            "glibness", "holy-aura", "illusory-dragon", "incendiary-cloud", "maddening-darkness", "maze", "mighty-fortress", "mind-blank", "power-word-stun", 
            "reality-break", "sunburst", "telepathy", "tsunami", "astral-projection", "blade-of-disaster", "foresight", "gate", "imprisonment", 
            "invulnerability", "mass-heal", "mass-polymorph", "meteor-swarm", "power-word-heal", "power-word-kill", "prismatic-wall", "psychic-scream", 
            "ravenous-void", "shapechange", "storm-of-vengeance", "time-ravage", "time-stop", "true-polymorph", "true-resurrection", "weird", "wish"];


           const filtered = choices.filter(choice => choice.startsWith(focusedValue)).slice(0, 25)
           await interaction.respond(
                filtered.map(choice => ({ name: choice, value: choice}))
           )
        },

        async execute(interaction)
        {
            var spellName = interaction.options.getString('spellname')
            var url = "http://www.dnd5e.wikidot.com/spell:" + spellName;
            await interaction.reply(url)
        },
}