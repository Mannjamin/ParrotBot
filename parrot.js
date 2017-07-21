const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./json_files/config.json');

//########################################################################################################

client.on('ready', () => {
  	console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  	client.user.setGame('SQUARK SQUARK!!!!!!')
});

//########################################################################################################

client.on('message', message => {
	setTimeout(function()
	{
		const embed = {
			"image": {
			"url": "https://cdn.discordapp.com/attachments/337938256564060160/337938298393722881/zktRC5t.gif"
		},
	};
	
	message.guild.channels.find("name", "INSERT_NAME_OF_CHANNEL_HERE").send({embed}) //DO NOT USE THIS BOT WITHOUT GIVING IT A SPECIFIC CHANNEL.
	
	}, 30000);
});

//########################################################################################################

client.login(config.token);
