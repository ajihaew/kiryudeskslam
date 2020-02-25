const Discord = require('discord.js');

const kiryuDeskSlam = new Discord.Client();
kiryuDeskSlam.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot

kiryuDeskSlam(‘ready’, () => 
{
	console.log(“just found out about sex”);
	console.log(kiryuDeskSlam.user.username);
});
	

kiryuDeskSlam.on(‘message’, msg =>
{
	var mes = msg.content.toLowerCase();
	if (mes.includes(‘just found out about’,’sex’,’racism’)) {
		msg.channel.send(“https://www.youtube.com/watch?v=YcAHHKY3Y0I');
	}
});
