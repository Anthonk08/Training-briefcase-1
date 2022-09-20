from config import *
import telebot # En cmd instalar esto pip install pyTelegramBotAPI
# Botones inline
from telebot.types import InlineKeyboardMarkup # Crea botones inline
from telebot.types import InlineKeyboardButton # Define los botones inline

# Instanciamos el bot de telegram
bot = telebot.TeleBot(TOKEN)

# Responde al comando /botones
@bot.message_handler(commands=["botones"])

def cmd_botones(message):
    # Mostrar un mensaje con botones inline, debajo del mensaje
    markup = InlineKeyboardMarkup(row_width=2) # Numero de botones por fila (3 por defecto)
    # Botones
    b1 = InlineKeyboardButton("GITHUB", url="https://github.com/Anthonk08")
    b2 = InlineKeyboardButton("LINKEDLN", url="https://www.linkedin.com/in/anthony-tineo-cabreja-0835b7210/")
    b3 = InlineKeyboardButton("FACEBOOK", url="https://web.facebook.com/anthony.tineocabreja")
    b4 = InlineKeyboardButton("INSTAGRAM", url="https://www.instagram.com/anthonytineoc/")
    b5 = InlineKeyboardButton("GMAIL", url="https://mail.google.com/mail/u/0/?tab=rm&ogbl")
    b_cerrar = InlineKeyboardButton("CERRAR", callback_data="cerrar")
    markup.add(b1, b2, b3, b4, b5, b_cerrar)
    bot.send_message(message.chat.id, "Mis redes sociales, por si necesitas contactarme", reply_markup=markup)

@bot.callback_query_handler(func=lambda x: True) # Es una funcion lambda que siempre devuelve True
# Funcion para cerrar
def respuesta_botones_inline(call):
    # Gestionara las acciones de los botones callback_data
    cid = call.from_user.id
    mid = call.message.id
    if call.data == "cerrar":
        bot.delete_message(cid, mid)


# __________________________________MAIN__________________________________
if __name__ == '__main__':
    bot.infinity_polling()