const EventEmitter = require('events');

var url = 'https://anthonyWeb.com';

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        // Raise an event
        this.emit(`messageLogged`, { id: 1, url: url});
    }
}

module.exports = Logger;