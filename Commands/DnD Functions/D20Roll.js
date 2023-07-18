const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('d20')
		.setDescription('Generates a random number between 1 and 20'),
	async execute(interaction) {
		var randomNum = Math.floor(Math.random() * 20) + 1

		

		await interaction.reply(randomNum.toString())
	},
};
