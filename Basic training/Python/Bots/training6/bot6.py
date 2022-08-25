from cgitb import text
from config import *
import telebot # para manejar la API de telegram
from telebot.types import ReplyKeyboardMarkup # para crear los botones
from telebot.types import ReplyKeyboardRemove # para borrar los botones
from telebot.types import ForceReply # Para citar un mensaje

# Instanciamos el bot de telegram
bot = telebot.TeleBot(TOKEN)
# Variables GLOBALES
usuarios = {}

# responde a los comandos /start, /info, /help
@bot.message_handler(commands=['start', 'help', 'info'])

def cmd_start(message):
    # Muestra los comandos disponibles
    markup = ReplyKeyboardRemove()
    bot.send_message(message.chat.id, "Usa el comando /alta para introducir tus datos", reply_markup=markup)

# responde al comando alta
@bot.message_handler(commands=['alta'])

def cmd_alta(message):
    #Pregunta el nombre del usuario
    markup = ForceReply() # Creamos una instancia de ForceReply
    msg = bot.send_message(message.chat.id, "Como te llamas?", reply_markup=markup)
    bot.register_next_step_handler(msg, preguntar_edad)

def preguntar_edad(message):
    # Preguntar la edad del usuario
    usuarios[message.chat.id] = {} # Para guardar el nombre en el diccionario
    usuarios[message.chat.id]["nombre"] = message.text

    markup = ForceReply()
    msg = bot.send_message(message.chat.id, "Cuantos años tienes?", reply_markup=markup)
    bot.register_next_step_handler(msg, preguntar_sexo)

def preguntar_sexo(message):
    # Preguntar la edad del usuario
    if not message.text.isdigit(): # Si la edad introducida no es un numero
        # Informamos del error y volvemos a preguntar
        markup = ForceReply()
        msg = bot.send_message(message.chat.id, "Error, debes indicar un numero.\nCuantos años tienes?")
        bot.register_next_step_handler(msg, preguntar_sexo)
    else: # Si la edad esta correcta
        usuarios[message.chat.id]["edad"] = int(message.text) # Guardamos en usuario, la edad
        # Definimos 2 botones
        markup = ReplyKeyboardMarkup(one_time_keyboard=True, input_field_placeholder="Pulsa uno de los botones!!", resize_keyboard=True)
        # Con resize_keyboard=True, se ponen los botones mas pequeños
        markup.add("Hombre", "Mujer")
        # preguntamos por el sexo
        msg = bot.send_message(message.chat.id, "Cual es tu sexo?", reply_markup=markup)
        #registrar la respuesta en la funcion indicada
        bot.register_next_step_handler(msg, guardar_datos_usuario)

def guardar_datos_usuario(message):
    # Guardamos los datos introducidos por el usuario
    # Si el sexo introducido no es validio
    if message.text != "Hombre" and message.text != "Mujer":
        # Informamos del error y volvemos a preguntar
        msg = bot.send_message(message.chat.id, "Error, Sexo no valido.\nPulsa un boton")
        bot.register_next_step_handler(msg, guardar_datos_usuario)
    else: # Si el sexo esta correcta
        usuarios[message.chat.id]["sexo"] = message.text
        # Presentamos los datos del usuario
        texto = 'Datos introducidos:\n'
        texto += f'<code>Nombre:</code> {usuarios[message.chat.id]["nombre"]}\n'
        texto += f'<code>Edad:</code> {usuarios[message.chat.id]["edad"]}\n'
        texto += f'<code>Sexo:</code> {usuarios[message.chat.id]["sexo"]}\n'
        markup = ReplyKeyboardRemove()
        bot.send_message(message.chat.id, texto, parse_mode="html", reply_markup=markup)
        print(usuarios)
        # Borrar datos guardados en el diccionario o la base de datos
        del usuarios[message.chat.id]

# ________________________________________________MAIN________________________________________________
if __name__ == '__main__':
    # Inicia el bot y se mantiene en un bucle infinito para comprobar si hay nuevos mensajes
    bot.infinity_polling()
