from config import *
import telebot # En cmd instalar esto pip install pyTelegramBotAPI
import time
import random
import threading
# Botones inline
from telebot.types import InlineKeyboardMarkup # Crea botones inline
from telebot.types import InlineKeyboardButton # Define los botones inline

# Instanciamos el bot de telegram
bot = telebot.TeleBot(TOKEN)

# Responden al comando start
@bot.message_handler(commands=["start"])

# Funciones de los comandos
def cmd_start(message):
    # Dar la bienvenida al usuario del bot
    bot.send_chat_action(message.chat.id, "typing")
    bot.reply_to(message, "Hola "+message.chat.first_name+", aqui estan todos los comandos que puedes usar, para controlar al bot.\n\n/start - Mostrar todos los comandos\n\n/buttons - Mostrara todos los hobbies de Anthony\n\n/info - Mostrara las redes personales de Anthony\n\n/help - Te dara una pequeña descripcion de como puedes interacctuar con el bot")

# Responden al comando buttons
@bot.message_handler(commands=["buttons"])

# Responde al comando button
def cmd_button(message):
    bot.send_chat_action(message.chat.id, "typing")
    # Mostrar un mensaje con botones inline, debajo del mensaje
    markup = InlineKeyboardMarkup(row_width=1) # Numero de botones por fila (3 por defecto)
    # Botones
    b1 = InlineKeyboardButton("FOTO", callback_data="b1")
    b2 = InlineKeyboardButton("LIBRO PDF", callback_data="b2")
    b3 = InlineKeyboardButton("VIDEO", callback_data="b3")
    b_cerrar = InlineKeyboardButton("CERRAR", callback_data="cerrar")
    markup.add(b1, b2, b3, b_cerrar)
    bot.send_message(message.chat.id, "HOBBIES Y GUSTOS", reply_markup=markup)


# Responden al comando infor
@bot.message_handler(commands=["info"])

def cmd_info(message):
    # Ofrece informacion sobre el bot y su autor
    bot.send_chat_action(message.chat.id, "typing")
    bot.reply_to(message, "Hola "+message.chat.first_name+", aqui estan todos los contactos del autor.\n\n")
    # Mostrar un mensaje con botones inline, debajo del mensaje
    markup = InlineKeyboardMarkup(row_width=2) # Numero de botones por fila (3 por defecto)
    # Botones
    b1 = InlineKeyboardButton("GITHUB", url="https://github.com/Anthonk08")
    b2 = InlineKeyboardButton("LINKEDLN", url="https://www.linkedin.com/in/anthony-tineo-cabreja-0835b7210/")
    b3 = InlineKeyboardButton("FACEBOOK", url="https://web.facebook.com/anthony.tineocabreja")
    b4 = InlineKeyboardButton("INSTAGRAM", url="https://www.instagram.com/anthonytineoc/")
    b5 = InlineKeyboardButton("GMAIL", url="https://mail.google.com/mail/u/0/?tab=rm&ogbl")
    markup.add(b1, b2, b3, b4, b5)
    bot.send_message(message.chat.id, "Mis redes sociales, por si necesitas contactarme", reply_markup=markup)

# Responden al comando help
@bot.message_handler(commands=["help"])

def cmd_help(message):
    # Ofrece ayuda sobre como utilizar el bot
    bot.send_chat_action(message.chat.id, "typing")
    bot.reply_to(message, "Hola este es el apartado de ayuda.\n\nPara poder contartar el bot pues utilizar el comando \start o escribir en el chat")

# Responder a los mensajes sin poner comandos
@bot.message_handler(content_types=["text", "photo", "video"])

def bot_mensajes_texto(message):
    # Gestiona los mensajes que recibe
    # Esta funcion recibe dos parametros el chat id, tiene un identificador unico y el mensaje
    if message.text and message.text.startswith("/"):
        bot.send_chat_action(message.chat.id, "typing")
        bot.send_message(message.chat.id, "ERROR: Este comando no existe!!")
    else:
        bot.send_chat_action(message.chat.id, "typing")
        # Mostrar un mensaje con botones inline, debajo del mensaje
        markup = InlineKeyboardMarkup(row_width=1) # Numero de botones por fila (3 por defecto)
        # Botones
        b1 = InlineKeyboardButton("FOTO", callback_data="b1")
        b2 = InlineKeyboardButton("LIBRO PDF", callback_data="b2")
        b3 = InlineKeyboardButton("VIDEO", callback_data="b3")
        b_cerrar = InlineKeyboardButton("CERRAR", callback_data="cerrar")
        markup.add(b1, b2, b3, b_cerrar)
        bot.send_message(message.chat.id, "HOBBIES Y GUSTOS", reply_markup=markup)

# Funcion para mostrar foto
def mostrar_foto(message):
    num = random.randint(1, 4)
    bot.send_chat_action(message.chat.id, "upload_photo")
    foto = open("./img/anime"+str(num)+".jpg", "rb")
    bot.send_photo(message.chat.id, foto, "Anime!!")

# Funcion para mostrar archivo
def mostrar_archivo(message):
    num = random.randint(1, 4)
    bot.send_chat_action(message.chat.id, "upload_document")
    archivo = open("./docs/LIBRO "+str(num)+".pdf", "rb")
    bot.send_document(message.chat.id, archivo, caption="El libro #"+str(num)+" de los libros de la cancion de Hielo y Fuego, juego de tronos")

# Funcion para mostrar video
def mostrar_video(message):
    bot.send_chat_action(message.chat.id, "upload_video")
    video = open("./videos/video1.mp4", "rb")
    bot.send_video(message.chat.id, video, caption="Video divertido")

@bot.callback_query_handler(func=lambda x: True) # Es una funcion lambda que siempre devuelve True
# Funcion para cerrar
def respuesta_botones_inline(call, message):
    # Gestionara las acciones de los botones callback_data
    cid = call.from_user.id
    mid = call.message.id
    if call.data == "b1":
        mostrar_foto(message)
    if call.data == "b2":
        mostrar_archivo(message)
    if call.data == "b3":
        mostrar_video(message)
    if call.data == "cerrar":
        bot.delete_message(cid, mid)

def recibir_mensajes():
    bot.infinity_polling()

# ________________________________________________MAIN________________________________________________
if __name__ == '__main__':
    # Configurar los comandos de neustro bot
    bot.set_my_commands([
        telebot.types.BotCommand("/start", "Te muestra todos los comandos disponibles"),
        telebot.types.BotCommand("/buttons", "Te muestras los hobbies y gustos de Anthony"),
        telebot.types.BotCommand("/info", "Ofrece informacion sobre el autor"),
        telebot.types.BotCommand("/help", "Ofrece ayuda sobre el bot")
    ])

    # Usando threading
    hilo_bot = threading.Thread(name="hilo_bot", target=recibir_mensajes)
    hilo_bot.start()
    bot.send_message(MI_CHAT_ID, "Bienvenido al bot Kira Hobbies, es un gusto tenerte por aqui!!.\n\nQue puede hacer este bot por ti?\n\nKira Hobbies es un bot creado para mostrar los hobbies y gustos de Anthony Tineo.\n\nContacto directo via correo: anthonytineocabreja3@gmail.com.")