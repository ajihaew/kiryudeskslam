const Discord = require('discord.js');

const kiryuDeskSlam = new Discord.Client();
kiryudeskslam.login(NjgxNzA2MjEzNzc5NzAxNzgw.XlSYSQ.Tsrj7f0fvV0B0trESuYMGY4V-0Y);

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
