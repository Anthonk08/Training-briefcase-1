import pyshorteners

from cgitb import text
from argparse import Action
from socket import timeout
from telegram.ext import Updater, CommandHandler, ConversationHandler, MessageHandler, Filters, CallbackQueryHandler
from telegram import ChatAction, InlineKeyboardButton, InlineKeyboardMarkup

INPUT_TEXT = 0
INPUT_URL = 0

# COMANDO INICIAR CONVERSACION
def start(update, context):
    """
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
        text = 'Hola, bienvenido, que deseas hacer? \n\nUsa /qr para generar un codigo qr',
        reply_markup = InlineKeyboardMarkup([
            [button1, button2, button3],
            [InlineKeyboardButton(text='Generar QR', callback_data='qr')],
        ])
    )
    """
    update.message.reply_text(
        text = 'Hola, bienvenido, que deseas hacer?',
        reply_markup = InlineKeyboardMarkup([
            [InlineKeyboardButton(text='Acortar URL', callback_data='url')],
        ])
    )

# Callback para llamar el comando URL
def url_callback_handler(update, context):
    query = update.callback_query
    query.answer()
    query.edit_message_text(
        text='Enviame un enlace para acortarlo'
    )
    return INPUT_TEXT

# Input url, toma el enlace que envia el usuario
def input_url(update, context):
    url = update.message.text
    # El identificador chat muestra datos del usuario, importante
    chat = update.message.chat
    # Utilizar el api de tercero para acortar la url
    s = pyshorteners.Shortener()
    short = s.chilpit.short(url)

    chat.send_action(
        action = ChatAction.TYPING,
        timeout=None
    )
    chat.send_message(
        text = short
    )
    return ConversationHandler.END


if __name__ == '__main__':
    updater = Updater(token='5787662693:AAGmzkgi-AcYNI9y-7gTU8gksJszdUJAXWA', use_context=True)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler('start', start))

    dp.add_handler(ConversationHandler(
        entry_points=[
            CallbackQueryHandler(pattern='url', callback=url_callback_handler)
        ],
        states={
            INPUT_URL: [MessageHandler(Filters.text, input_url)]
        },
        fallbacks=[]
    ))

    # add handler, esto hace que  el bot se mantenga consultando lo que llega al bot
    updater.start_polling()
    updater.idle()
