const express = require('express') 

require('dotenv').config()

const path = require('path')

const index = express()

const port = process.env.PORT

index.set('views', './views')

index.set('view engine', 'ejs')

index.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/public/index.html'));
})

index.listen(port, () => {
    console.log(`Escuchando pedidos en PORT: ${port}`)
})