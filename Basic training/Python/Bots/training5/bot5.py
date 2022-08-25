import threading
from config import *
import telebot # En cmd instalar esto pip install pyTelegramBotAPI
import time
import random
import threading #

# Instanciamos el bot de telegram
bot = telebot.TeleBot(TOKEN)

# Responde al comando /start
@bot.message_handler(commands=["start", "info", "help"])

def cmd_start(message):
    # Dar la bienvenida al usuario del bot
    bot.reply_to(message, "Hola!, en que puedo ayudarte?")
    #print(message.chat.id) # Para saber cual es mi chat id

# Responder a los mensajes sin poner comandos
@bot.message_handler(content_types=["text", "photo", "video"])

def bot_mensajes_texto(message):
    # Gestiona los mensajes que recibe
    # Esta funcion recibe dos parametros el chat id, tiene un identificador unico y el mensaje
    if message.text and message.text.startswith("/"):
        bot.send_message(message.chat.id, "Este comando no existe")
    else:
        bot.send_chat_action(message.chat.id, "typing")
        x = bot.send_message(message.chat.id, "Saludos, bienvenido a mi chat")

        # subir video
        #bot.send_chat_action(message.chat.id, "upload_video")
        #video = open("./videos/video1.mp4", "rb")
        #bot.send_video(message.chat.id, video, caption="Video divertido")

        # Subir archivo
        #num = random.randint(1, 4)
        #bot.send_chat_action(message.chat.id, "upload_document")
        #archivo = open("./docs/LIBRO "+str(num)+".pdf", "rb")
        #bot.send_document(message.chat.id, archivo, caption="El libro #"+str(num)+" de los libros de la cancion de Hielo y Fuego, juego de tronos")

        # Subir fotos
        #num = random.randint(1, 4)
        #bot.send_chat_action(message.chat.id, "upload_photo")
        #foto = open("./img/anime"+str(num)+".jpg", "rb")
        #bot.send_photo(message.chat.id, foto, "Anime famoso!")

        # Despues de un tiempo, modificar el mensaje
        #bot.send_chat_action(message.chat.id, "typing")
        #time.sleep(2)
        # Modificar un mensaje
        #bot.edit_message_text("Adios!!", message.chat.id, x.message_id)

        # Despues de un tiempo, borrar el mensaje
        #bot.send_chat_action(message.chat.id, "typing")
        #time.sleep(2)
        # Borrar un mensaje
        #bot.delete_message(message.chat.id, x.message_id)

def recibir_mensajes():
    bot.infinity_polling()

# Usar main
if __name__ == '__main__':
    # Configurar los comandos de neustro bot
    bot.set_my_commands([
        telebot.types.BotCommand("/start", "Te da la bienvenida"),
        telebot.types.BotCommand("/info", "Ofrece informacion sobre el bot"),
        telebot.types.BotCommand("/help", "Ofrece ayuda sobre el bot")
    ])

    # Iniciando el bot
    #bot.infinity_polling() # Esto puede estar aqui o en una funcion

    # Usando threading
    hilo_bot = threading.Thread(name="hilo_bot", target=recibir_mensajes)
    hilo_bot.start()
    bot.send_message(MI_CHAT_ID, "Bienvenido a mi chat de Telegram te saluda Kira el bot!!")
