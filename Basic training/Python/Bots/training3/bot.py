from cgitb import text
import os
import qrcode

from argparse import Action
from socket import timeout
from telegram.ext import Updater, CommandHandler, ConversationHandler, MessageHandler, Filters, CallbackQueryHandler
from telegram import ChatAction, InlineKeyboardButton, InlineKeyboardMarkup

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
        text = 'Hola, bienvenido, que deseas hacer? \n\nUsa /qr para generar un codigo qr',
        reply_markup = InlineKeyboardMarkup([
            [button1, button2, button3],
            [InlineKeyboardButton(text='Generar QR', callback_data='qr')],
        ])
    )

# Comando QR
def qr_command_handler(update, context):
    update.message.reply_text('Enviame el texto para generar un codigo QR')
    return INPUT_TEXT

# Callback para llamar el comando QR
def qr_callback_handler(update, context):
    query = update.callback_query
    query.answer()
    query.edit_message_text(
        text='Enviame el texto para generar un codigo QR'
    )
    return INPUT_TEXT

# Generador del codigo QR
def generate_qr(text):
    filename = text + '.jpg'
    img = qrcode.make(text)
    img.save(filename)
    return filename

# Enviar el codigo QR al usuario en el chat
def send_qr(filename, chat):
    # Realizar acciones, muesta por ejemplo: fulano esta escribiendo
    chat.send_action(
        action = ChatAction.UPLOAD_PHOTO,
        timeout=None
    )
    chat.send_photo(
        photo = open(filename, 'rb')
    )
    os.unlink(filename)

# Input text, toma el texto que envia el usuario
def input_text(update, context):
    text = update.message.text
    filename = generate_qr(text)
    # El identificador chat muestra datos del usuario, importante
    chat = update.message.chat
    send_qr(filename, chat)
    return ConversationHandler.END

if __name__ == '__main__':
    updater = Updater(token='5787662693:AAGmzkgi-AcYNI9y-7gTU8gksJszdUJAXWA', use_context=True)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler('start', start))

    dp.add_handler(ConversationHandler(
        entry_points=[
            CommandHandler('qr', qr_command_handler),
            CallbackQueryHandler(pattern='qr', callback=qr_callback_handler)
        ],
        states={
            INPUT_TEXT: [MessageHandler(Filters.text, input_text)]
        },
        fallbacks=[]
    ))

    # add handler, esto hace que  el bot se mantenga consultando lo que llega al bot
    updater.start_polling()
    updater.idle()
