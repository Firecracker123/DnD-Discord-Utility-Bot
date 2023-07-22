const {Client, Events, GatewayIntentBits, Message, SlashCommandBuilder, Collection, Guild, Intents} = require('discord.js');
const token = require('./config.json');

const client = new Client ({intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers], partials: [GatewayIntentBits.channel]})

    const fs = require('fs')
    const path = require('path')
    const commandsPath = path.join(__dirname, 'Commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'))
    

    for (const file of commandFiles)
    {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)

        if (data in command && 'execute' in command)
        {
            client.command.set(command.data.name, command)
        }
        else
        {
            console.log('[warning] the command at ${filePath} is missing a required "data" or "execute" property.')
        }
    }





    //COMMAND BULLSHIT DO NOT TOUCH
    const commandClient = new Client({intents: [GatewayIntentBits.Guilds]})
    commandClient.commands = new Collection()    
    const foldersPath = path.join(__dirname, 'Commands')
    const commandFolders = fs.readdirSync(foldersPath)
    console.log('The commands loading are: ')
    const {interactionType} = require('discord.js')

    for (const folder of commandFolders)
    {
        const commandsPath = path.join(foldersPath, folder)
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('js'))

        for (const file of commandFiles)
        {
            const filePath = path.join(commandsPath, file)
            const command = require(filePath)

            if ('data' in command && 'execute' in command)
            {
                console.log(command.data.name + '\n')
                commandClient.commands.set(command.data.name, command)
            }
            else
            {
                console.log('[WARNING] The command at ${filePath} is missing a required "data" or "execute" property')
            }
        }
    }

client.on(Events.InteractionCreate, async interaction => {
    console.log('interaction')
    if (interaction.isAutocomplete())
        {
            console.log('Autocomplete is happening')
            const newCommand = commandClient.commands.get(interaction.commandName)

            try{
                console.log("responded")
            await newCommand.autocomplete(interaction)
            } catch (error)
            {
                console.error('not fucking working')
                console.error(error)
            }
        }
        else return
}
)

client.on(Events.InteractionCreate, async interaction => {
    
    //interaction.reply('loading...')
    //console.log(interaction.commandClient.commands)
    
   if (!interaction.isChatInputCommand() || interaction.isAutocomplete()) return
   
        
        console.log(interaction.commandName)
        const newCommand = commandClient.commands.get(interaction.commandName)
        console.log('Interacted')

        if (!newCommand) 
        {
            console.error('No command matching ${interaction.commandName} was found')
            return
        }

        

        try {
               await newCommand.execute(interaction, client)       
        }
        catch(error) {
            console.error(error)

            if(interaction.replied || interaction.deffered) {
                await interaction.followUp({ content: 'There was an error while executing this command', ephemeral: true})
            }
            else
            {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true})
            }
        }
    }
)

client.once(Events.ClientReady, c => {
    console.log("Ready");
})



client.on('messageCreate', (msg) => {
    if (msg.content.indexOf('shit') > -1)
    {
         msg.reply('don\'t swear')
    }
    

    const channel = client.channels.cache.get(msg.channelId)

    if (msg.content.toUpperCase() === "MESSAGE") channel.send('You sent a message')
    
})

/*client.on('msgCreate', (msg) => {
    if (msg.content === 'ping'){
        msg.reply('Pong!')
    }
});*/


client.login(token.token);
