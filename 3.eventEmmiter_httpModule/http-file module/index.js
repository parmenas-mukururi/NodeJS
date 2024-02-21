const EventEmitter = require('events')
const logEvents = require('./LogEvents');

const eventEmitter = new EventEmitter()
eventEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    eventEmitter.emit('log', 'new data has been emitted😂')
}, 2000)