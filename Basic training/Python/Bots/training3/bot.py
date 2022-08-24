from telegram.ext import Updater, CommandHandler

def start(update, context):
    update.message.reply_text('Hola, como te va?')

if __name__ == '__main__':
    updater = Updater(token='5787662693:AAGmzkgi-AcYNI9y-7gTU8gksJszdUJAXWA', use_context=True)

    dp = updater.dispatcher
    dp.add_handler(CommandHandler('start', start))

    # add handler, esto hace que  el bot se mantenga consultando lo que llega al bot
    updater.start_polling()
    updater.idle()
