const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        // Deixando vazio e forçando o protocolo Bedrock
        version: false, 
        hideErrors: true, // Ignora erros chatos de protocolo
        checkTimeoutInterval: 90000,
        auth: 'offline'
    })

    bot.on('spawn', () => {
        console.log('BOT LOGADO NO CRAFTING LANDS!');
    })

    bot.on('error', (err) => {
        console.log('Aguardando servidor... Erro atual: ', err.message);
    })
    
    bot.on('end', () => {
        console.log('Reconectando em 15 segundos...');
        setTimeout(createBot, 15000);
    })
}

createBot()
