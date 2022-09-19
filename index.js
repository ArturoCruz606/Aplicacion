const express = require('express') 

const index = express()

const port = 6969

index.set('views', './views')

index.set('view engine', 'ejs')

index.get('/', (request, response) => {
    response.render('index')
})

index.listen(port, () => {
    console.log(`Escuchando pedidos en PORT: ${port}`)
})