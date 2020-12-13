const Telegraf = require('telegraf')

const bot = new Telegraf('1421704664:AAHWYWGbipJ5Ind-G1qF63hOJzLgD_zFkuI')
bot.start((ctx) => ctx.reply('Welcome! Greet me with /hi and i will show you a list of countries where you can go)'))
bot.help((ctx) => ctx.reply('Use /journey'))
bot.on('sticker', (ctx) => ctx.reply('I dont understand stickers, use /help to see all commands'))
bot.command('hi', (ctx) => ctx.reply('Hi, use /journey to see all countries'))
bot.command('journey', (ctx) => ctx.reply('Choose country, and I will show you info about it \n/Indonesia 🇲🇨 \n/Germany 🇩🇪 \n/Thailand 🇨🇷 \n/Spain 🇪🇸 \n/Japan 🇯🇵 \n/Italy 🇮🇹 \n If you have already chosen, click /here'))
bot.command('here', (ctx) => ctx.reply('Have you made your choice? Write to us in telegram @arrah1s'))
bot.command('Indonesia', (ctx) => ctx.reply(`INDONESIA \nIs a country in Southeast Asia with capital Jakarta, Its a beatiful place to spend your vacation with Sun, Sea and Beach./IndPrice`))
bot.command('IndPrice', (ctx) => ctx.reply(`3 days in Indonesia 10000 UAH\n5 days in Indonesia 15000 UAH\n7 days in Indonesia 20,000 UAH\nUse /journey to see other destination`))

bot.command('Japan', (ctx) => ctx.reply(`JAPAN \nThis is the land of the rising sun, with a majestic culture and traditions, the capital is Tokyo. Japan is the perfect place to enjoy Asian culture./JapPrice`))
bot.command('JapPrice', (ctx) => ctx.reply(`3 days in Japan 12000 UAH\n5 days in Japan 18000 UAH\n7 days in Japan 25,000 UAH\nUse /journey to see other destination`))

bot.command('Germany', (ctx) => ctx.reply(`GERMANY \nA country in the center of Europe, with a great culture, one of the richest economies in the world, the capital is Berlin. Will be a great place where you can feel the European soul./GerPrice`))
bot.command('GerPrice', (ctx) => ctx.reply(`3 days in Germany 9000 UAH\n5 days in Germany 10000 UAH\n7 days in Germany 14,000 UAH\nUse /journey to see other destination`))

bot.command('Thailand', (ctx) => ctx.reply(`THAILAND \nLocated in Southeast Asia, on the Indochina and Malacca peninsulas. A wonderful place where you will relax body and soul, under the bright Sun of East Asia./ThaiPrice`))
bot.command('ThaiPrice', (ctx) => ctx.reply(`3 days in Thailand 15000 UAH\n5 days in Thailand 20000 UAH\n7 days in Thailand 27,000 UAH\nUse /journey to see other destination`))

bot.command('Italy', (ctx) => ctx.reply(`ITALY \nA country located in the south of Europe, wonderful climate, kind people, delicious food, from local pasta, you will be crazy./ItaPrice`))
bot.command('ItaPrice', (ctx) => ctx.reply(`3 days in Italy 12000 UAH\n5 days in Italy 18000 UAH\n7 days in Italy 25,000 UAH\nUse /journey to see other destination`))

bot.command('Spain', (ctx) => ctx.reply(`SPAIN \nThe Kingdom of Spain is the best place to spend your holidays, under the warm sun and emerald sea, you will never forget this land./SpaPrice`))
bot.command('SpaPrice', (ctx) => ctx.reply(`3 days in Spain 15000 UAH\n5 days in Spain 19000 UAH\n7 days in Spain 22,000 UAH\nUse /journey to see other destination`))


bot.launch()