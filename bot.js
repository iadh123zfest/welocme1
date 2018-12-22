client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("524624748047499264");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To **NIX Network**`), 4000)        
}
});
