
from telegram.ext import Updater, CommandHandler, ConversationHandler, MessageHandler, Filters
from telegram import InlineKeyboardMarkup, InlineKeyboardButton

INPUT_TEXT = 0

# COMANDO INICIAR CONVERSACION
def start(update, context):
    button1 = InlineKeyboardButton(
        text='Linkedin del autor',
        url='https://www.linkedin.com/in/anthony-tineo-cabreja-0835b7210/'
    )
    button2 = InlineKeyboardButton(
        text='Github del autor',
        url='https://github.com/Anthonk08'
    )
    button3 = InlineKeyboardButton(
        text='Instagram del autor',
        url='https://www.instagram.com/anthonytineoc/'
    )
    update.message.reply_text(
        text='Elige uno de los botones',
        reply_markup=InlineKeyboardMarkup([
            [button1],
            [button2, button3]
        ])
    )

if __name__ == '__main__':
    updater = Updater(token='5419783011:AAEWbPFKSK3vnwP9e-uVdDIB1OVhHErjXK0', use_context=True)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler('start', start))

    # add handler, esto hace que  el bot se mantenga consultando lo que llega al bot
    updater.start_polling()
    updater.idle()