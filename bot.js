client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520271042388688918");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome`), 4000)        
}
});
