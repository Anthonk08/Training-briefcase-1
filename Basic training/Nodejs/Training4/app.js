const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', arg => { // e, event Arg
    console.log(`Lisatener call`, arg);
});

logger.log('message');