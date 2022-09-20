import logging
import os
from telegram.ext import Updater, CommandHandler

# Configurar Logging
logging.basicConfig(
    level = logging.INFO, format="%(asctiome)s - %(name)s - %(levelname)s - %(message)s,"
)
logger = logging.getLogger()

# Solicitar Token
TOKEN = os.getenv("TOKEN")

def start(update, context):
    print(update)

if __name__ == "__main__":
    # Obtenemos informacion de nuestro bot
    my_bot = telegram.Bot(token = TOKEN)

# Enlazamos nuestro updater con nuestro bot
updater = Updater(my_bot.token, use_context=True)

# Creamos un despachador
dp = updater.dispatcher

# Creamos los manejadores
dp.add_handler(CommandHandler("start", start))

updater.start_polling()

updater.idle() # Permite finalizar el bot con el Ctrl + C

print("Anthony")