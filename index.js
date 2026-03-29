const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        // Removi o .x para evitar o erro de protocolo
        version: false, 
        auth: 'offline'
    })

    bot.on('spawn', () => {
        console.log('Bot CFCentral entrou no servidor!');
    })

    bot.on('error', (err) => {
        console.log('Erro encontrado: ', err.message);
    })
    
    bot.on('end', () => {
        console.log('Bot caiu. Tentando reconectar em 10 segundos...');
        setTimeout(createBot, 10000);
    })
}

createBot()
