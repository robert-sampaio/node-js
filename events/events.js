const { EventEmitter } = require('events')
const ev = new EventEmitter()

// on = todos
// once = um só
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Robert")
ev.emit('saySomething', "Mayk")
ev.emit('saySomething', "Abner")