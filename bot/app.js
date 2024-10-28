import {Telegraf, Markup} from 'telegraf'

const token =  '7596615949:AAGDusU8Zlpx3_NaLnNuyMIBmOfXsRKfVZI'
const webAppUrl = 'https://lizard-clicker-pro-684cc.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Hello! Press button to start the app',
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
        ])
    )  

})

bot.launch()