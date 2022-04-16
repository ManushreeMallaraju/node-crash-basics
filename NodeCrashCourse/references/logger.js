const EventEmitter = require('events');

//const { v4: uuidV4 } = require('uuid');
//const uuid = require('uuid');

//console.log(uuid.v4());

class Logger extends EventEmitter {

    log(msg) {

        //Call/raise event
        this.emit('message', { msg });
    }
}

module.exports = Logger;