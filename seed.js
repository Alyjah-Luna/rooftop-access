require('dotenv').config()
require('./config/database')

const Map = require('./models/map')

(async function() {
    await Map.deleteMany({})
    const maps = Map.create([])

    console.log(maps)

    process.exit()
})()