require('dotenv').config()
require('./config/database')

const Note = require('./models/note')

(async function() {
    await Note.deleteMany({})
    const notes = Note.create([
        {note: '1st note'},
        {note: '2nd note'}
    ])

    console.log(notes)

    process.exit()
})()