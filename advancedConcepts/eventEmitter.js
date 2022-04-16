// TODO: What is eventEmitter in Node js? - raise and handle custom events

var events = require('events');

// init object
var em = new events.EventEmitter(); // Create an event Emitter

let myListener = function (data) {
    console.log('My listener =>', data);
}

// Event emitter will register an event and have a listener
em.on('FirstEvent', myListener);

// When an event is emitted/raised, 
em.emit('FirstEvent', "Data passed"); // any data passed will be listened in the listener..
em.emit('Second Event'); // NOTE: if there is no event registered, it doen't listen for it..

// TODO: de-register or remove the listener
//em.removeAllListeners(); // will removes all listeners..
em.removeListener('FirstEvent', myListener);

em.emit('FirstEvent', "Data passed 2"); // will not invoke the listeners, as they are removed..


