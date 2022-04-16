const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// init object
const myEmitterObj = new MyEmitter();

// Event Listener
myEmitterObj.on('event', () => {
    console.log('Event fired!');
})

// Init event
myEmitterObj.emit('event');
myEmitterObj.emit('event');
myEmitterObj.emit('event');
myEmitterObj.emit('event');


