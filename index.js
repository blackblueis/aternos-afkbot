const mineflayer = require('mineflayer')
const bedrock = require('mineflayer-bedrock')

function createBot() {
    const bot = mineflayer.createBot({
        host: "CFLands.aternos.me",
        port: 55817,
        username: "CFCentral",
        version: "1.20.x", // Compatível com as versões atuais do Aternos
        auth: 'offline'
    })

    // Ativa o suporte para o Minecraft Bedrock
    bedrock(bot)

    bot.on('spawn', () => {
        console.log('Bot CFCentral entrou no servidor Crafting Lands!');
    })

    bot.on('error', (err) => {
        console.log('Ocorreu um erro: ', err);
    })

    // Se o bot cair, ele tenta entrar de novo em 10 segundos
    bot.on('end', () => {
        console.log('Bot desconectado. Tentando reconectar...');
        setTimeout(createBot, 10000);
    })
}

createBot()
