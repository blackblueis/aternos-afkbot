const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        // Forçando a versão exata que você está usando
        version: "1.26.3", 
        auth: 'offline',
        checkTimeoutInterval: 60000
    })

    bot.on('spawn', () => {
        console.log('Bot CFCentral entrou no servidor na versão 1.26!');
    })

    bot.on('error', (err) => {
        console.log('Erro de conexão: ', err.message);
    })
    
    bot.on('end', () => {
        console.log('Bot caiu. Tentando reconectar em 10 segundos...');
        setTimeout(createBot, 10000);
    })
}

createBot()
