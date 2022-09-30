const express = require('express') 

require('dotenv').config()

const path = require('path')

const index = express()

const port = process.env.PORT

index.set('views', './views')

index.set('view engine', 'ejs')

index.get('/', (request, response) => {
    response.render('index')
})

index.listen(port, () => {
    console.log(`Escuchando pedidos en PORT: ${port}`)
})