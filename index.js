const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        version: "1.20.1", // Coloquei uma versão fixa que o Aternos aceita bem
        auth: 'offline'
    })

    bot.on('spawn', () => {
        console.log('Bot CFCentral entrou no servidor!');
    })

    bot.on('error', (err) => console.log('Erro no Bot: ', err.message))
    
    bot.on('end', () => {
        console.log('Caiu, reconectando em 10 segundos...');
        setTimeout(createBot, 10000);
    })
}

createBot()
