const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rollstats')
		.setDescription('Creates rolls stats for a character using the 4d6 drop the lowest method'),
	async execute(interaction) {
		var lowest = 0
		var lowestPos = 0
		let generatedValues = [0, 0, 0, 0]
		let statTotals = [0,0,0,0,0,0]
		let outString = 'values are \n'

		for (var i = 0; i < 6; i++)
		{
			for (var j = 0; j < 4; j++)
			{
				generatedValues[j] = Math.floor(Math.random() * 6) + 1

				if (generatedValues[j] < lowest)
				{
					lowest = genedValue
					lowestPos = i 
				}
			}


			for (var j = 0; j < 4; j++)
			{
				if (j != lowestPos)
				{
					statTotals[i] += generatedValues[j] 
				}
			}
			outString = outString + statTotals[i] + ' \n'
		}

		

		await interaction.reply(outString)
	},
};
