const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        version: "1.20.x",
        auth: 'offline'
    })

    bot.on('spawn', () => {
        console.log('Bot CFCentral entrou no servidor!');
    })

    bot.on('error', (err) => console.log('Erro: ', err))
    
    bot.on('end', () => {
        console.log('Caiu, reconectando...');
        setTimeout(createBot, 5000);
    })
}

createBot()
